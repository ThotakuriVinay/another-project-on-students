// js/signup.js
function toggleRoleSpecificFields() {
    const role = document.getElementById('role').value;
    const teacherFields = document.getElementById('teacher-fields');

    if (role === 'teacher') {
        teacherFields.style.display = 'block';
    } else {
        teacherFields.style.display = 'none';
    }
}
