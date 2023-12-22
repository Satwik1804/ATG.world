document.getElementById("navbarDropdown").addEventListener('click',openModal);
function openModal() {
  document.getElementById('loginModal1').style.display = 'none';
    document.getElementById('loginModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
  }

  document.getElementById("navbarDropdown1").addEventListener('click',openModal1);
  function openModal1() {
      document.getElementById('loginModal').style.display = 'none';
      document.getElementById('loginModal1').style.display = 'block';
    }
    
    function closeModal1() {
      document.getElementById('loginModal1').style.display = 'none';
    } 