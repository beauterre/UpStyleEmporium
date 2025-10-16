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


// Show a hidden/requester section (does NOT hide menu sections)
function showRequester(sectionId) {
  document.querySelectorAll('.hidden-section').forEach(s => s.style.display = 'none');
  var target = document.getElementById(sectionId);
  if(target) target.style.display = 'block';
}

// Hide a hidden/requester section
function hideRequester(sectionId) {
  var target = document.getElementById(sectionId);
  if(target) target.style.display = 'none';
}

  function showSectionInternal(sectionId) {
    // close all requesters
    document.querySelectorAll('.hidden-section').forEach(s => s.style.display = 'none');
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
      // init Model
      VASman.Model.init();
      // Show default section on load
      showSectionInternal('dashboard');
    },

  // **Expose the unified section/show function**
    showRequester: showRequester,
    hideRequester: hideRequester,
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
