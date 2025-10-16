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

function showSectionById(sectionId) 
{
  // Hide all sections
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.remove('active');
    sec.style.display = 'none'; // hide everything by default
  });

  // Show the requested section
  var target = document.getElementById(sectionId);
  if(!target) return;

  // For menu sections, use .active to keep your existing styling
  if(target.classList.contains('menu-section')) {
    target.classList.add('active');
    // Update menu buttons
    document.querySelectorAll('.menubar button').forEach(btn => btn.classList.remove('active'));
    var btn = document.getElementById(sectionId + 'Btn');
    if(btn) btn.classList.add('active');
  }

  // For all sections (menu or hidden), display it
  target.style.display = 'block';
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
      // init Model
      VASman.Model.init();
      // Show default section on load
      showSectionInternal('dashboard');
    },

  // **Expose the unified section/show function**
    showSectionById: showSectionById,
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
