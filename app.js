 /* menu bar functionality

 function showSection(sectionId) 
 {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.querySelectorAll('.menubar button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    document.getElementById(sectionId + 'Btn').classList.add('active');
  }

  */

  var VASman = (function() {
  // Private variables
  var sections;
  var menuButtons;

  // Private functions
  function initMenu() {
    sections = document.querySelectorAll('section');
    menuButtons = document.querySelectorAll('.menubar button');

    // Attach click listeners
    menuButtons.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        VASman.showSection(e);
      });
    });
  }

  function showSectionInternal(sectionId) {
    // Hide all sections
    sections.forEach(function(sec) { sec.classList.remove('active'); });
    // Remove active class from all buttons
    menuButtons.forEach(function(btn) { btn.classList.remove('active'); });
    // Show selected section
    var targetSection = document.getElementById(sectionId);
    if (targetSection) targetSection.classList.add('active');
    // Set active button
    var activeBtn = document.getElementById(sectionId + 'Btn');
    if (activeBtn) activeBtn.classList.add('active');
  }

  // Public API
  return {
    init: function() {
      console.log("DOM ready VASman initiating")
      initMenu();
      // Show default section on load
      showSectionInternal('dashboard');
    },

    showSection: function(event) {
      // Determine target button id
      var btn = event.currentTarget;
      if (!btn || !btn.id) return;

      // Derive section ID from button id: e.g., dashboardBtn → dashboard
      var sectionId = btn.id.replace(/Btn$/, '');
      showSectionInternal(sectionId);
    }
  };
})();

// Initialize VASman on DOM ready
document.addEventListener('DOMContentLoaded', function() {
  VASman.init();
});
