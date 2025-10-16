VASman.Model = (function() {
  // Private dummy data
  var inventory = [
    { id: 1, name: "Replica of the Glaive", sku: "V250001", stickered: true, category: "Lightning", condition: "Excellent", price: 0, status: "Available", woo: false, location: "Aisle 3" },
    { id: 2, name: "Miniature Porcelain Tea Set", sku: "V250002", stickered: false, category: "Minatures", condition: "Good", price: 45, status: "Available", woo: true, location: "Shelf B" }
  ];

  var dashboardStats = {
    totalItems: 181,
    available: 179,
    soldThisMonth: 1,
    totalValue: 21924.63,
    incomplete: 180,
    recentActivity: [
      "Added 'Contemporary Wall Clock' to inventory (21/07/2025)",
      "Added 'Miniature Dollhouse Salon' to inventory (21/07/2025)"
    ]
  };

  var categories = [
    { id: 1, name: "Jewelry", description: "Rings, necklaces, brooches, and other jewelry items", items: 1 },
    { id: 2, name: "Minatures", description: "Vintage and antique miniature items", items: 14 }
  ];

  // Public API
  return {
    init: function() {
      // Empty for now, will later fetch or prepare data
      console.log("init model called");
    },
    getInventory: function() { return inventory; },
    getDashboardStats: function() { return dashboardStats; },
    getCategories: function() { return categories; },
    addItem: function(item) { item.id = inventory.length + 1; inventory.push(item); },
    updateItem: function(id, newData) { 
      var item = inventory.find(function(i){ return i.id===id; });
      if(item) Object.keys(newData).forEach(function(k){ item[k]=newData[k]; });
    },
    deleteItem: function(id) { inventory = inventory.filter(function(i){ return i.id!==id; }); },
    addCategory: function(cat){ cat.id = categories.length + 1; categories.push(cat); },
    updateCategory: function(id,newData){ 
      var cat = categories.find(function(c){ return c.id===id; });
      if(cat) Object.keys(newData).forEach(function(k){ cat[k]=newData[k]; });
    },
    deleteCategory: function(id){ categories = categories.filter(function(c){ return c.id!==id; }); }
  };
})();
