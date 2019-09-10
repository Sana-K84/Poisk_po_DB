
document.getElementById('box_search_form').oninput = function () {
    var input_value = this.value.toLowerCase();
    document.getElementById('search_dynamic_info').innerHTML = " ";
    for (let i = 0; i < data.length; i++) {

        if (data[i].general.firstName.toLowerCase().indexOf(input_value) !== -1) {
            
            var element = document.getElementById('search_dynamic_info');


            var dynamic = document.createElement('div');
            var billet = document.createElement('div');
            var img = document.createElement('img');
            var first_name = document.createElement('span');
            var last_name = document.createElement('span');
            var title = document.createElement('span');
            var company = document.createElement('span');



            first_name.classList = 'info_billet_name';
            last_name.classList = 'info_billet_name';
            title.classList = 'info_billet_post';
            company.classList = 'info_billet_post';


            billet.classList = 'dynamic_info_billet';
            img.classList = 'dynamic_info_avatar';
            img.src = data[i].general.avatar;
            dynamic.classList = 'dynamic_info';
            first_name.innerHTML = data[i].general.firstName + ' ';
            last_name.innerHTML = data[i].general.lastName + '<br>';
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
            billet.appendChild(first_name);
            billet.appendChild(last_name);
            billet.appendChild(title);
            billet.appendChild(company);




        }

    }

};
