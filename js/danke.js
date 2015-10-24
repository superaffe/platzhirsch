function sichtbar(id) {
	   var query = window.location.search.substring(1);
	   var e = document.getElementById(id);
	
	   if(query == 'submit')
          e.style.display = 'block';
    }
