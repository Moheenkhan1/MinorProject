// Admin Page JavaScript

document.addEventListener('DOMContentLoaded', () => {
  // Fetch menu items and populate the table
  fetch('/api/menu')
      .then(response => response.json())
      .then(data => populateMenuTable(data))
      .catch(error => console.error('Error fetching menu data:', error));

  // Fetch users and populate the user table
  fetch('/api/users')
      .then(response => response.json())
      .then(data => populateUserTable(data))
      .catch(error => console.error('Error fetching user data:', error));

  // Add event listener for adding new menu items
  document.getElementById('add-item').addEventListener('click', () => {
      // Add functionality for adding a new item
      alert('Add Item functionality not implemented yet.');
  });
});

function populateMenuTable(menuItems) {
  const tableBody = document.getElementById('menu-table-body');
  tableBody.innerHTML = '';

  menuItems.forEach(item => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${item.id}</td>
          <td>${item.name}</td>
          <td>${item.price}</td>
          <td>${item.category}</td>
          <td>
              <button class="edit-item" data-id="${item.id}">Edit</button>
              <button class="delete-item" data-id="${item.id}">Delete</button>
          </td>
      `;

      tableBody.appendChild(row);
  });

  // Add event listeners for edit and delete buttons
  document.querySelectorAll('.edit-item').forEach(button => {
      button.addEventListener('click', (e) => editMenuItem(e.target.dataset.id));
  });

  document.querySelectorAll('.delete-item').forEach(button => {
      button.addEventListener('click', (e) => deleteMenuItem(e.target.dataset.id));
  });
}

function populateUserTable(users) {
  const tableBody = document.getElementById('user-table-body');
  tableBody.innerHTML = '';

  users.forEach(user => {
      const row = document.createElement('tr');

      row.innerHTML = `
          <td>${user.email}</td>
          <td>
              <button class="delete-user" data-id="${user._id}">Delete</button>
          </td>
      `;

      tableBody.appendChild(row);
  });

  // Add event listeners for delete buttons
  document.querySelectorAll('.delete-user').forEach(button => {
      button.addEventListener('click', (e) => deleteUser(e.target.dataset.id));
  });
}

function editMenuItem(id) {
  alert(`Edit functionality for menu item ${id} not implemented yet.`);
}

function deleteMenuItem(id) {
  if (confirm('Are you sure you want to delete this item?')) {
      fetch(`/api/menu/${id}`, { method: 'DELETE' })
          .then(response => {
              if (response.ok) {
                  alert('Menu item deleted successfully.');
                  location.reload(); // Refresh the page
              } else {
                  alert('Failed to delete menu item.');
              }
          })
          .catch(error => console.error('Error deleting menu item:', error));
  }
}

function deleteUser(id) {
  if (confirm('Are you sure you want to delete this user?')) {
      fetch(`/api/users/${id}`, { method: 'DELETE' })
          .then(response => {
              if (response.ok) {
                  alert('User deleted successfully.');
                  location.reload(); // Refresh the page
              } else {
                  alert('Failed to delete user.');
              }
          })
          .catch(error => console.error('Error deleting user:', error));
  }
}
