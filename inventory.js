// Toggle filter buttons
document.querySelectorAll('.filter-buttons .filter').forEach(function(btn){
  btn.addEventListener('click', function(){
    btn.classList.toggle('active');
    // Optional: swap between check/cross
    if(btn.classList.contains('active')){
      btn.classList.remove('inactive');
    } else {
      btn.classList.add('inactive');
    }
  });
});

// Hookup the "Edit Filters" button
document.getElementById('edit_filters').addEventListener('click', function() {
  // Show the filter CRUD hidden section
  VASman.showSectionById('filter-crud');
});
