let array = [
    {
        uralkod : "I. István",
        esemeny : "Koronázás",
        esemeny2 : "Pannonhalmi apátság megalapítása",
        evszam : "1000",
        evszam2 : "1001"
    },
    {
        uralkod : "IV. Béla",
        esemeny : "tatárjárás",
        evszam : "1241-1242"
    },
    {
        uralkod : "Mátyás király",
        esemeny : "Bécs elfoglalása",
        esemeny2 : "Kenyérmezei csata",
        evszam : "1485",
        evszam2 : "1479"
    },
    {
        uralkod : "II. Rákóczi Ferenc",
        esemeny : "A szabadságharc kezdete",
        esemeny2 : "A szabadságharc vége",
        evszam : "1703",
        evszam2 : "1711"
    }
];

const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const uralkodo = document.createElement('th');
uralkodo.innerHTML = 'Úralkodó';
tr.appendChild(uralkodo);

const esemeny = document.createElement('th');
esemeny.innerHTML = 'Esemény';
tr.appendChild(esemeny);

const evszam = document.createElement('th');
evszam.innerHTML = 'Évszám';
tr.appendChild(evszam);

kiir(array);


const form = document.getElementById('form')

form.addEventListener('submit',function(e){
    const uralkod_nev = document.getElementById('uralkodo_nev')
    const esemeny1 = document.getElementById('esemeny1');
    const evszam1 = document.getElementById('evszam1');
    const esemeny2 = document.getElementById('esemeny2');
    const evszam2 = document.getElementById('evszam2');


    e.preventDefault();
    const uralkod_nev_value = uralkod_nev.value;
    const esemeny1_value = esemeny1.value;
    const evszam1_value = evszam1.value;
    const esemeny2_value = esemeny2.value;
    const evszam2_value = evszam2.value;

    const uj_adatok = [
        {
        uralkod : uralkod_nev_value,
        esemeny : esemeny1_value,
        esemeny2 : esemeny2_value,
        evszam : evszam1_value,
        evszam2 : evszam2_value
        }
    ]

    array.push(uj_adatok);
    kiir(array);
})

form.reset();




function kiir(asd) {

    for (let adat of asd) {
        const new_tr = document.createElement('tr');

        
        const nev = document.createElement('td');
        nev.innerHTML = adat.uralkod;
        nev.rowSpan = adat.esemeny2 ? 2 : 1; 
        new_tr.appendChild(nev);

        
        const esemeny1 = document.createElement('td');
        esemeny1.innerHTML = adat.esemeny;
        new_tr.appendChild(esemeny1);

        
        const ev1 = document.createElement('td');
        ev1.innerHTML = adat.evszam;
        new_tr.appendChild(ev1);

        tbody.appendChild(new_tr);

        
        if (adat.esemeny2 && adat.evszam2) {
            const plusz_sor = document.createElement('tr');

            const esemeny2 = document.createElement('td');
            esemeny2.innerHTML = adat.esemeny2;
            plusz_sor.appendChild(esemeny2);

            const ev2 = document.createElement('td');
            ev2.innerHTML = adat.evszam2;
            plusz_sor.appendChild(ev2);

            tbody.appendChild(plusz_sor);
        }
    }


    
}