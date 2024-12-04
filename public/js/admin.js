

document.addEventListener("DOMContentLoaded", () => {

    const sidebarConfig = [{ 
        linkClass: "sidebar-click", 
        contentClass: "sidebar-dashboard-content" 
    },
    { 
        linkClass: "sidebar-click2",
        contentClass: "sidebar-product-content" 
    },
    {
         linkClass: "sidebar-click3", 
         contentClass: "sidebar-report-content" 
    },
    { 
        linkClass: "sidebar-click4", 
        contentClass: "sidebar-inventory-content" 
    }];

    // Close all sidebars
    const closeAllSidebars = () => {
      sidebarConfig.forEach(({ contentClass }) => {
        const sidebar = document.querySelector(`.${contentClass}`);
        if (sidebar) {
          sidebar.style.display = "none";
        }
      });
    };

    // Toggle visibility of sidebars
    sidebarConfig.forEach(({ linkClass, contentClass }) => {
      const links = document.querySelectorAll(`.${linkClass}`);
      const sidebar = document.querySelector(`.${contentClass}`);
      const closeButton = sidebar.querySelector(`.close-sidebar, .close-sidebar2, .close-sidebar3, .close-sidebar4`);
  
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
  
          if (sidebar.style.display === "block") {
            sidebar.style.display = "none";
          } else {
            closeAllSidebars();
            sidebar.style.display = "block";
            if (contentClass === "sidebar-inventory-content") {
              loadInventoryItems(); // Load items when Inventory sidebar is opened
            }
          }
        });
      });
  
      closeButton.addEventListener("click", () => {
        sidebar.style.display = "none";
      });
    });

    // Load inventory items dynamically
    /*const loadInventoryItems = () => {
      const inventoryContainer = document.querySelector('.inventory-items');
      inventoryContainer.innerHTML = ''; // Clear any previous items

      // Iterate over the fullMenuItems array and add each item to the inventory
      fullMenuItems.forEach(item => {
        const itemHTML = `
          <div class="sidebar-product">
            <div class="sidebar-product-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="sidebar-product-information">
              <p class="sidebar-product-name">${item.name}</p>
              <p class="sidebar-product-prize">$${item.price}</p>
            </div>
            <div class="sidebar-product-button">
              <button>REMOVE</button>
            </div>
          </div>
        `;
        inventoryContainer.innerHTML += itemHTML; // Append the item
      });
    };*/

});
