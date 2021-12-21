'use strict'

class Gyvunas {
    constructor(title, bruozai, id) {
    this.title = title;
    this.bruozai=bruozai;
    this.id=id;    
        }
    }
    
    class UI {
    
    addGyvunasToList(gyvunas) {
    
            const list = document.getElementById('animal-list');
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${gyvunas.title}</td>
            <td>${gyvunas.bruozai}</td>
            <td>${gyvunas.id}</td>
            
            <td><a href="" class="delete">X</a></td>
            `;
    list.appendChild(row);
    
        
    }
    
    showAlert(message, className){
    
                const div = document.createElement('div');
                div.className = `alert ${className}`;
                div.appendChild(document.createTextNode(message));
                const container = document.querySelector('.container');
                const form = document.querySelector('#animal-form');
                container.insertBefore(div, form);
                setTimeout(function(){
                    document.querySelector('.alert').remove();
                }, 1500);

    }
    deleteGyvunas(target) {
        if(target.className === 'delete'){
            target.parentElement.parentElement.remove();
        }
    }
    
    clearFields(){
        document.getElementById('title').value = '';
        document.getElementById('bruozai').value = '';
        document.getElementById('id').value = '';
    }
    }
 
    document.getElementById('animal-form').addEventListener('submit',function(e){
        
        const title = document.getElementById('title').value;
        const bruozai = document.getElementById('bruozai').value;
        const id = document.getElementById('id').value;
        const gyvunas = new Gyvunas(title, bruozai, id)
        const ui = new UI();
        
       
        if(title === '' || bruozai === '' || id === '') {
            ui.showAlert('prasome uzpildyti visus laukus');
        }
        else{
        ui.addGyvunasToList(gyvunas);

        ui.showAlert('Gyvunas pridetas');
        ui.clearFields();
        }
    
        e.preventDefault();
        })
        document.getElementById('animal-list').addEventListener('click', function(e){
        const ui = new UI();
        ui.deleteAnimal(e.target);
        ui.showAlert('Gyvunas grazintas!');
        e.preventDefault();
        });






























