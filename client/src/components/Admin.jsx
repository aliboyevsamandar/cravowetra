import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";
import Login from "./Login";

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || "");
  const [foods, setFoods] = useState([]);
  const [chefs, setChefs] = useState([]);

  const [newFood, setNewFood] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });
  const [isEditingFood, setIsEditingFood] = useState(false);
  const [editingFoodId, setEditingFoodId] = useState(null);

  const [newChef, setNewChef] = useState({ name: "", image: "" });
  const [isEditingChef, setIsEditingChef] = useState(false);
  const [editingChefId, setEditingChefId] = useState(null);

  const API_BASE = `https://cravowetra.onrender.com/api`;

  useEffect(() => {
    if (token) fetchData();
  }, [token]);

  const axiosConfig = {
    headers: { Authorization: `Bearer ${token}` },
  };

  const fetchData = async () => {
    try {
      const [foodsRes, chefsRes] = await Promise.all([
        axios.get(`${API_BASE}/foods`, axiosConfig),
        axios.get(`${API_BASE}/chefs`, axiosConfig),
      ]);
      setFoods(foodsRes.data);
      setChefs(chefsRes.data);
    } catch (err) {
      console.error("Error:", err);
      if (err.response?.status === 401 || err.response?.status === 403)
        logout();
    }
  };

  const handleInputChange = (e, type) => {
    const { name, value } = e.target;
    if (type === "food") {
      setNewFood({ ...newFood, [name]: value });
    } else {
      setNewChef({ ...newChef, [name]: value });
    }
  };

  const saveFood = async () => {
    try {
      if (isEditingFood) {
        await axios.put(
          `${API_BASE}/foods/${editingFoodId}`,
          newFood,
          axiosConfig
        );
        Swal.fire("✅ Successful!", "Food has been updated", "success");
      } else {
        await axios.post(`${API_BASE}/foods`, newFood, axiosConfig);
        Swal.fire("✅ Successful!", "Food added", "success");
      }
      setNewFood({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
      });
      setIsEditingFood(false);
      setEditingFoodId(null);
      fetchData();
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error!",
        isEditingFood ? "Error updating food" : "Error adding food",
        "error"
      );
    }
  };

  const deleteFood = async (id) => {
    try {
      await axios.delete(`${API_BASE}/foods/${id}`, axiosConfig);
      Swal.fire("✅ Deleted!", "Food deleted", "success");
      fetchData();
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error!",
        "An error occurred while deleting the feed.",
        "error"
      );
    }
  };

  const editFood = (food) => {
    setNewFood({
      name: food.name,
      price: food.price,
      category: food.category,
      image: food.image,
      description: food.description,
    });
    setIsEditingFood(true);
    setEditingFoodId(food._id);
  };

  const saveChef = async () => {
    try {
      if (isEditingChef) {
        await axios.put(
          `${API_BASE}/chefs/${editingChefId}`,
          newChef,
          axiosConfig
        );
        Swal.fire("✅ Successful!", "Chef updated", "success");
      } else {
        await axios.post(`${API_BASE}/chefs`, newChef, axiosConfig);
        Swal.fire("✅ Successful!", "Chef joined", "success");
      }
      setNewChef({ name: "", image: "", age: "" });
      setIsEditingChef(false);
      setEditingChefId(null);
      fetchData();
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌ Error!",
        isEditingChef ? "Error updating chef" : "Error adding chef",
        "error"
      );
    }
  };

  const deleteChef = async (id) => {
    try {
      await axios.delete(`${API_BASE}/chefs/${id}`, axiosConfig);
      Swal.fire("✅ Deleted!", "Chef deleted", "success");
      fetchData();
    } catch (err) {
      console.error(err);
      Swal.fire(
        "❌Error!",
        "An error occurred while deleting the chef.",
        "error"
      );
    }
  };

  const editChef = (chef) => {
    setNewChef({ name: chef.name, image: chef.image, age: chef.age });
    setIsEditingChef(true);
    setEditingChefId(chef._id);
  };

  const logout = () => {
    localStorage.removeItem("adminToken");
    setToken("");
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Input focus uchun state
  const [inputFocus, setInputFocus] = useState({});

  const handleFocus = (e) => {
    setInputFocus((prev) => ({ ...prev, [e.target.name]: true }));
  };
  const handleBlur = (e) => {
    setInputFocus((prev) => ({ ...prev, [e.target.name]: false }));
  };

  return (
    <div className="admin-container">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <div className="header-buttons">
          <button
            className="btn btn-home"
            onClick={() => (window.location.href = "/")}
          >
            Home
          </button>
        </div>
      </header>

      {/* Food form */}
      <section className="form-section">
        <h2>{isEditingFood ? "✏️ Edit Food" : "➕ Add New Food"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveFood();
          }}
          className="form"
        >
          <input
            type="text"
            name="name"
            placeholder="Food name"
            value={newFood.name}
            onChange={(e) => handleInputChange(e, "food")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.name ? "input-focused" : ""}
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price ($)"
            value={newFood.price}
            onChange={(e) => handleInputChange(e, "food")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.price ? "input-focused" : ""}
            required
            min="0"
            step="0.01"
          />
          <select
            name="category"
            value={newFood.category}
            onChange={(e) => handleInputChange(e, "food")}
            required
            className={inputFocus.category ? "input-focused" : ""}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            <option value="" disabled>
              Select category
            </option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newFood.image}
            onChange={(e) => handleInputChange(e, "food")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.image ? "input-focused" : ""}
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={newFood.description}
            onChange={(e) => handleInputChange(e, "food")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.description ? "input-focused" : ""}
            rows={3}
            required
          />
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">
              {isEditingFood ? "Save" : "Add"}
            </button>
            {isEditingFood && (
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => {
                  setIsEditingFood(false);
                  setEditingFoodId(null);
                  setNewFood({
                    name: "",
                    price: "",
                    category: "",
                    image: "",
                    description: "",
                  });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Foods list */}
      <section className="list-section">
        <h2>Food list</h2>
        <ul className="list">
          {foods.map((food) => (
            <li key={food._id} className="list-item">
              <div className="list-item-info">
                <img
                  src={food.image}
                  alt={food.name}
                  className="food-image"
                  onError={(e) =>
                    (e.target.src = "")
                  }
                />
                <div>
                  <h3>{food.name}</h3>
                  <p>
                    <span className="category">{food.category}</span> —{" "}
                    <span className="price">${food.price}</span>
                  </p>
                  <p className="description">{food.description}</p>
                </div>
              </div>
              <div className="list-item-actions">
                <button className="btn btn-edit" onClick={() => editFood(food)}>
                  ✏️
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() =>
                    Swal.fire({
                      title: "Delete??",
                      text: "You're deleting the feed!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, delete it!",
                      cancelButtonText: "Cancel",
                    }).then((result) => {
                      if (result.isConfirmed) deleteFood(food._id);
                    })
                  }
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Chef form */}
      <section className="form-section">
        <h2>{isEditingChef ? "✏️ Edit Chef" : "➕ Add New Chef"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            saveChef();
          }}
          className="form"
        >
          <input
            type="text"
            name="name"
            placeholder="Chef name"
            value={newChef.name}
            onChange={(e) => handleInputChange(e, "chef")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.name ? "input-focused" : ""}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Chef age"
            value={newChef.age}
            onChange={(e) => handleInputChange(e, "chef")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.age ? "input-focused" : ""}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image url"
            value={newChef.image}
            onChange={(e) => handleInputChange(e, "chef")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={inputFocus.image ? "input-focused" : ""}
            required
          />
          <div className="form-buttons">
            <button type="submit" className="btn btn-submit">
              {isEditingChef ? "Save" : "Add"}
            </button>
            {isEditingChef && (
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => {
                  setIsEditingChef(false);
                  setEditingChefId(null);
                  setNewChef({ name: "", image: "" });
                }}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </section>

      {/* Chefs list */}
      <section className="list-section">
        <h2>Chefs list</h2>
        <ul className="list">
          {chefs.map((chef) => (
            <li key={chef._id} className="list-item">
              <div className="list-item-info">
                <img
                  src={chef.image}
                  alt={chef.name}
                  className="chef-image"
                  onError={(e) =>
                    (e.target.src = "https://via.placeholder.com/60")
                  }
                />
                <div>
                  <h3>{chef.name}</h3>
                </div>
              </div>
              <div className="list-item-actions">
                <button className="btn btn-edit" onClick={() => editChef(chef)}>
                  ✏️
                </button>
                <button
                  className="btn btn-delete"
                  onClick={() =>
                    Swal.fire({
                      title: "Delete?",
                      text: "You'll delete the chef!",
                      icon: "warning",
                      showCancelButton: true,
                      confirmButtonText: "Yes, delete it!",
                      cancelButtonText: "Cancel",
                    }).then((result) => {
                      if (result.isConfirmed) deleteChef(chef._id);
                    })
                  }
                >
                  ❌
                </button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        .admin-container {
          max-width: 900px;
          margin: 2rem auto;
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
          padding: 1rem;
        }
        .admin-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          border-bottom: 2px solid #ddd;
          padding-bottom: 0.5rem;
        }
        .header-buttons button {
          margin-left: 1rem;
          padding: 0.5rem 1rem;
          border: none;
          cursor: pointer;
          border-radius: 5px;
          font-weight: 600;
          transition: background-color 0.3s;
        }
        .btn-home {
          background-color: #2d89ef;
          color: white;
        }
        .btn-home:hover {
          background-color: #1b5fb4;
          color: white;
        }
        .btn-logout {
          background-color: #e81123;
          color: white;
        }
        .btn-logout:hover {
          background-color: #a50e1a;
          color: white;
        }

        .form-section {
          margin-bottom: 3rem;
          background: #f9f9f9;
          padding: 1rem 2rem;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .form-section h2 {
          margin-bottom: 1rem;
          color: #333;
          font-weight: 700;
        }
        .form {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .form input,
        .form select,
        .form textarea {
          flex: 1 1 200px;
          padding: 0.6rem 0.8rem;
          border: 1px solid #ccc;
          border-radius: 6px;
          font-size: 1rem;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .form textarea {
          resize: vertical;
          flex-basis: 100%;
        }
        .input-focused {
          border-color: #2d89ef;
          box-shadow: 0 0 5px #2d89efaa;
          outline: none;
        }
        .form-buttons {
          flex-basis: 100%;
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .btn {
          padding: 0.6rem 1.4rem;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          user-select: none;
          transition: background-color 0.3s;
        }
        .btn-submit {
          background-color: #107c10;
          color: white;
        }
        .btn-submit:hover {
          background-color: #0b5a0b;
          color: white;
        }
        .btn-cancel {
          background-color: #767676;
          color: white;
        }
        .btn-cancel:hover {
          background-color: #5a5a5a;
        }

        .list-section {
          margin-bottom: 3rem;
        }
        .list-section h2 {
          font-weight: 700;
          margin-bottom: 1rem;
          color: #444;
        }
        .list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          max-height: 350px;
          overflow-y: auto;
        }
        .list-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.7rem 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
          transition: box-shadow 0.2s;
        }
        .list-item:hover {
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }
        .list-item-info {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex: 1;
          min-width: 0;
        }
        .food-image,
        .chef-image {
          width: 60px;
          height: 60px;
          border-radius: 8px;
          object-fit: cover;
          flex-shrink: 0;
          border: 1px solid #ddd;
        }
        h3 {
          margin: 0 0 0.2rem 0;
          font-weight: 700;
          font-size: 1.1rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 200px;
        }
        p {
          margin: 0;
          font-size: 0.9rem;
          color: #666;
        }
        .category {
          font-weight: 600;
          color: #2d89ef;
        }
        .price {
          font-weight: 600;
          color: #107c10;
        }
        .description {
          font-style: italic;
          color: #555;
          max-width: 350px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .list-item-actions button {
          margin-left: 0.5rem;
          padding: 0.4rem 0.7rem;
          border-radius: 6px;
          font-size: 1.2rem;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
          user-select: none;
        }
        .btn-edit {
          background-color: #f0ad4e;
          color: white;
        }
        .btn-edit:hover {
          background-color: #ec971f;
        }
        .btn-delete {
          background-color: #d9534f;
          color: white;
        }
        .btn-delete:hover {
          background-color: #c9302c;
        }

        @media (max-width: 600px) {
          .form {
            flex-direction: column;
          }
          .form input,
          .form select,
          .form textarea {
            flex-basis: 100%;
          }
          .list-item-info h3 {
            max-width: 120px;
          }
          .description {
            max-width: 180px;
          }
        }
      `}</style>
    </div>
  );
}
