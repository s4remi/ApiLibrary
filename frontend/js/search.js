document.addEventListener("DOMContentLoaded", function () {
  const userInput = document.getElementById("gotoresult");
  const searchButton = document.getElementById("searchbyisbn-btn");

  userInput.addEventListener("input", (event) => {
    console.log("in the addlistener for input");
    const userInputValue = userInput.value.replace(/\D/g, "");
    console.log("userInputValue: ", userInput);
  });
  searchButton.addEventListener("click", () => {
    const data_recorded = userInput.value;
    console.log("search eventlister\t:", data_recorded);
    if (data_recorded) {
      console.log("data_recorded", data_recorded);
      fetchBookByIsbn(data_recorded);
    }
  });
});

// fetching data from db
async function fetchBookByIsbn(data_recorded) {
  try {
    const response = await fetch("/searchByIsbn", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        isbn: data_recorded,
      }),
    });
    if (response.ok) {
      const bookDetails = await response.json();
      if (bookDetails.data) {
        console.log("after fetch:", bookDetails.data[0]);
        loadBook(bookDetails.data[0]);
      } else {
        alert("No Book Found");
      }
    } else {
      console.log("Response not okey:", response.status);
      alert("Failed to fetch the book details");
    }
  } catch (error) {
    console.error(error);
    alert("error fetching book details");
  }
}

const loadBook = (mongo_response) => {
  document.title = mongo_response.title;
  document.getElementById(
    "prompts_isbn"
  ).innerHTML = `<h1 id="title">${mongo_response.title}</h1>
  `;
};
