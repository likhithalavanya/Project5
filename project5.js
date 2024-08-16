// Function to handle adding items to the order
function addToOrder(dish) {
    alert(dish + " added to your order!");
}

// Function to handle submitting reviews
function submitReview() {
    const reviewText = document.getElementById('review-text').value;
    if (reviewText) {
        const reviewContainer = document.getElementById('reviews-container');
        const newReview = document.createElement('div');
        newReview.innerText = reviewText;
        reviewContainer.appendChild(newReview);
        document.getElementById('review-text').value = ''; // Clear the input
    } else {
        alert('Please enter a review before submitting.');
    }
}

// Function to handle user login (basic example, not secure)
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulating a login process (should be replaced with actual authentication)
    if (username === 'user' && password === 'password') {
        alert('Login successful!');
    } else {
        alert('Incorrect username or password.');
    }
});
