  <script>
        function showSuccessMessage(event) {
            event.preventDefault(); // Prevent the default form submission
            document.getElementById('successMessage').style.display = 'block'; // Show success message
            document.getElementById('applicationForm').reset(); // Optionally reset the form
            return false; // Prevent further action
        }
      </script>
      