const todoList = [
            // default data
            "Belajar",
            "Olahraga",
        ];

        function clearDisplay (){ // function untuk clear first child todo
            const todoListBody = document.getElementById("todoListBody");
            while(todoListBody.firstChild) {
                todoListBody.removeChild(todoListBody.firstChild);
            }
        }

        function removeTodoList(index) {
            todoList.splice(index, 1); // splice == menghapus (index ke berapa, hapus 1 saja)
            todoListDisplay(); // tampilkan data baru
        }

        function addTodo(index, todo) {
            
                const tr = document.createElement("tr"); // membuat element table row
                const tdButton = document.createElement("td"); // membuat element table data untuk nantinya di isi button "kelar"
                tr.appendChild(tdButton); // memasukkan tdButton ke tabel row dengan kosong

                const buttonDone = document.createElement("input");  // membuat element input
                buttonDone.type = "button"; // set type input
                buttonDone.value = "Kelar"; // set value kelar
                buttonDone.onclick = function () {
                    removeTodoList(index)
                } 
                tdButton.appendChild(buttonDone); // memasukkan button input kelar ke tdButton

                const tdTodo = document.createElement("td"); // membuat tabel data untuk value todo
                tdTodo.textContent = todo; // menampilkan value todo dari array ke tabel data
                tr.appendChild(tdTodo); // memasukkan value todo ke table row

                const todoListBody = document.getElementById("todoListBody"); // ambil id form todolistbody
                todoListBody.appendChild(tr); // memasukkan table row ke element tabel body
                
            
        }

        function todoListDisplay () {
            clearDisplay();

            for (let i = 0; i < todoList.length; i++) { // membuat perulangan untuk display isi array todo list
                const todo = todoList[i]; // ambil todo 1 per 1

                // SEARCH
                const searchText = document.getElementById("search").value.toLowerCase(); // ambil value dari id input search dan convert ke lower case

                if(todo.toLowerCase().includes(searchText)) { // jika kata todo(conevert ke lowercase) mengadung kata yang sama dengan variabel searchText
                    addTodo(i, todo); // tampilkan todo nya
                }


            }
        }

        document.forms['todoForm'].onsubmit = function (event) { // membuat event untuk id todoForm
            event.preventDefault(); // agar tidak otomatis submit

            const todo = document.forms['todoForm']['todo'].value; // ambil value dari input form
            todoList.push(todo); // memasukan value ke array dari variable todoList
            document.forms['todoForm'].reset(); // reset inputan form saat user tekan Tambah

            console.info(todoList); // debugging/cek data masuk ke array atau tidak


            todoListDisplay(); // panggil func untuk menampilkan todo list
        };

        const search = document.getElementById("search");
        // search.onchange = function () { // harus di klik lagi untuk search nya keluar
        //     console.info("onchange"); 
        // }
        search.onkeydown = function () {
            todoListDisplay();
        }
        search.onkeyup = function () {
            todoListDisplay();
        }


        todoListDisplay(); // panggil func untuk menampilkan todo list