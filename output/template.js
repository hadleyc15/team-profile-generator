var generateHTML = {
    generateHTML: function (data) {
        return `<!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="./assets/style.css"
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
            <title>Team Profile Generator</title>
        </head>

        <body>

            <div class="container-fluid bg-danger text-white text-center py-4">
                <h2>My Team</h2>
            </div>

            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
            integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
            integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
            crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
            integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
            crossorigin="anonymous"></script>
    </body>

    </html>
            `;
    },
    addManagerCard: function (data) {
        return `
        <div class="card m-2" style="width: 18rem;" id="TeamCards">
            <div class="card-header bg-primary">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${data.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID#: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">Office#: ${data.officeNumber}</li>
                </ul>
            </div>
            </div>
         `
    },

    addEngineerCard: function (data) {
        return `
        <div class="card m-2" style="width: 18rem;" id="TeamCards">
            <div class="card-header bg-primary">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${data.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID#: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">Github: <a href="github.com/ ${data.github}">github.com/${data.github}</a></li>
                </ul>
            </div>
            </div>
         `
    },

    addInternCard: function (data) {
        return `
        <div class="card m-2" style="width: 18rem;" id="TeamCards">
            <div class="card-header bg-primary">
                <h2 class="card-title">${data.name}</h2>
                <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${data.title}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID#: ${data.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li class="list-group-item">School: ${data.school}</li>
                </ul>
            </div>
            </div>
         `
    },

}



module.exports = generateHTML