document.getElementById('search').oninput = function () {
    var val = this.value.toLowerCase();
    document.getElementById('box-4').innerHTML = " ";
    for (let i = 0; i < data.length; i++) {

        if (data[i].general.firstName.toLowerCase().indexOf(val) !== -1) {

            var element = document.getElementById('box-4');


            var dynamic = document.createElement('div');
            var billet = document.createElement('div');
            var img = document.createElement('img');
            var f_name = document.createElement('span');
            var l_name = document.createElement('span');
            var title = document.createElement('span');
            var company = document.createElement('span');



            f_name.classList = 'name';
            l_name.classList = 'name';
            title.classList = 'post';
            company.classList = 'post';


            billet.classList = 'box-5';
            img.classList = 'imgs';
            img.src = data[i].general.avatar;
            dynamic.classList = 'box-3';
            f_name.innerHTML = data[i].general.firstName + ' ';
            l_name.innerHTML = data[i].general.lastName + '<br>';
            title.innerHTML = data[i].job.title + '<br>';
            company.innerHTML = data[i].job.company;





            dynamic.onclick = function () {
                

                
const liam = {
    
                firstName: data[i].general.firstName,
                lastName: data[i].general.lastName,
                avatar: data[i].general.avatar,
                company: data[i].job.company,
                title: data[i].job.title,
                email: data[i].contact.email,
                phone: data[i].contact.phone,
                street: data[i].address.street,
                city: data[i].address.city,
                zipCode: data[i].address.zipCode,
                country: data[i].address.country

};
                
                
                 for (let key in liam) {
                     if (key !== 'avatar') {
                         document.getElementById(key).innerHTML = liam[key];
                     } else {
                         document.getElementById(key).src = liam[key];
                     };
                 };
                
            };


            element.appendChild(dynamic);

            dynamic.appendChild(img);
            dynamic.appendChild(billet);
            billet.appendChild(f_name);
            billet.appendChild(l_name);
            billet.appendChild(title);
            billet.appendChild(company);




        }

    }

};
