
function MakeUnit(i) {

    let element = document.getElementById('search_dynamic_info');

    let dynamic = document.createElement('div');
    let billet = document.createElement('div');
    let img = document.createElement('img');
    let first_name = document.createElement('span');
    let last_name = document.createElement('span');
    let title = document.createElement('span');
    let company = document.createElement('span');

    first_name.classList = 'billet_name';
    last_name.classList = 'billet_name';
    title.classList = 'billet_post';
    company.classList = 'billet_post';

    billet.classList = 'DynamicInfo_billet';
    img.classList = 'DynamicInfo_avatar';
    img.src = data[i].general.avatar;
    img.alt = 'avatar_min';
    dynamic.classList = 'dynamic_info';
    first_name.innerHTML = data[i].general.firstName + ' ';
    last_name.innerHTML = data[i].general.lastName + '<br>';
    title.innerHTML = data[i].job.title + '<br>';
    company.innerHTML = data[i].job.company;

    dynamic.onclick = function () {

        const unitData = {

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

        for (let key in unitData) {
            if (key !== 'avatar') {
                document.getElementById(key).innerHTML = unitData[key];
            } else {
                document.getElementById(key).src = unitData[key];
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

for (let i = 0; i < data.length; i++) {
    MakeUnit(i);
}

document.getElementById('box_search_form').oninput = function () {
    let input_value = this.value.toLowerCase();
    document.getElementById('search_dynamic_info').innerHTML = " ";
    for (let i = 0; i < data.length; i++) {

        if ((data[i].general.firstName.toLowerCase().indexOf(input_value) !== -1) ||
            (data[i].general.lastName.toLowerCase().indexOf(input_value) !== -1)) {
            MakeUnit(i)
        }
    }
};
