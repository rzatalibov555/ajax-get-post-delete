$(document).ready(() => {
    function fetchData() {
        $.ajax({
            url: "http://localhost:5000/users",
            method: "GET",
            success: (data) => {
                let tableContent = `
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>`;

                data.forEach((user) => {
                    tableContent += `
                        <tr>
                            <td>${user.id}</td>
                            <td>${user.name}</td>
                            <td>${user.surname}</td>
                            <td><button type="button" class="btn del btn-danger ms-2" data-id="${user.id}">Delete</button></td>
                        </tr>`;
                });

                tableContent += `</tbody></table>`;
                $('#result').html(tableContent);
            },
        });
    }

    fetchData();

    function addData() {
        const name = $("#name").val();
        const surname = $("#surname").val();
        const date = new Date();

        const data = {
            name: name,
            surname: surname,
            createdAt: date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString()
        };

        $.ajax({
            url: "http://localhost:5000/users",
            method: "POST",
            data: data,
            success: (response) => {
                $("#name").val("");
                $("#surname").val("");
                console.log(response);
                fetchData(); // Refresh the data after adding a user
            },
            error: (error) => {
                console.error("Error sending data:", error);
            }
        });
    }

    $("#send").click(addData);

    $(document).on('click', '.del', function () {
        const userId = $(this).data("id");
        deleteData(userId);
    });

    function deleteData(userId) {
        $.ajax({
            url: `http://localhost:5000/users/${userId}`,
            method: "DELETE",
            success: (response) => {
                console.log(response);
                fetchData(); // Refresh user data after deleting
            },
            error: (error) => {
                console.error("Error deleting user data:", error);
            }
        });
    }
});


















// =============================================================================================


// $(document).ready(() => {

//     function fetchData() {
//         $.ajax({
//             url: "http://localhost:3000/users",
//             method: "GET",
//             success: (data) => {
//                 let jokeText = '';

//                 console.log(data);

//                 data.forEach((user) => {
//                     jokeText += `
//                     <div class="data">
//                         <table class="table table-striped">
//                             <thead>
//                             <tr>
//                                 <th>Id</th>
//                                 <th>Name</th>
//                                 <th>Surname</th>
//                                 <th>Operations</th>
//                             </tr>
//                             </thead>
//                             <tbody>
//                             <tr>
//                                 <td>${user.id}</td>
//                                 <td>${user.name}</td>
//                                 <td>${user.surname}</td>
//                                 <td><button type="button" class="btn del btn-danger ms-2" data-id="${user.id}">Delete</button>  </td>
//                             </tr>
//                             </tbody>
//                         </table>
//                     </div>
//                     `
//                 })

//                 $('#result').html(jokeText);


//                 $(".del").click(function () {
//                     const userId = $(this).data("id");
//                     deleteData(userId);
//                 });

//             },
//         })





//     }
//     fetchData()
//     // setInterval(fetchData, 1000);



//     function addData() {
//         const name = $("#name").val();
//         const surname = $("#surname").val();
//         const date = new Date();



//         const data = {
//             name: name,
//             surname: surname,
//             creacreatedAt: date.getHours() + ":" + date.getMinutes() + ", " + date.toDateString()
//         }

//         $.ajax({
//             url: "http://localhost:3000/users",
//             method: "POST",
//             data: data,
//             success: (response) => {
//                 console.log(response)
//             },
//             error: (error) => {
//                 console.error("Error sending data:", error);
//             }
//         })


//         fetchData()


//     }

//     $("#send").click(addData)
//     // $("#getData").click(fetchData)


//     // $(".del").click(function () {
//     //     const userId = $(this).data("id");
//     //     console.log(userId)

//     //     deleteData(userId);
//     // });

//     // $(document).on('click', '.del', function () {
//     //     const userId = $(this).data("id");
//     //     console.log(userId);
//     //     deleteData(userId);
//     // });

//     function deleteData(userId) {
//         $.ajax({
//             url: `http://localhost:3000/users/${userId}`,
//             method: "DELETE",
//             success: (response) => {
//                 console.log(response);
//                 // Refresh user data after deleting
//                 fetchData();
//             },
//             error: (error) => {
//                 console.error("Error deleting user data:", error);
//             }
//         })
//     }



// })