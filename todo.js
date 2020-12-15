var allGPA = 0;
var semGPA = [0,0,0,0,0,0,0,0];
var allCRD = 0;
var semCRD = [0,0,0,0,0,0,0,0];
var mjGPA = 0;
var mjCRD = 0;

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('#form1').onsubmit = function(){
        let sem = document.createElement('span')
        sem = document.getElementById("semester")
        const semester = sem.options[sem.selectedIndex].text
        const table = document.getElementById(semester)
        const row = document.createElement('tr')
        const col1 = document.createElement('td')
        const col2 = document.createElement('td')
        const col3 = document.createElement('td')
        const col4 = document.createElement('td')
        const del = document.createElement('button')
        
        let name = document.querySelector('#name').value 
        let gpa = document.createElement('span')
        gpa = document.getElementById("gpa")
        let grade = gpa.options[gpa.selectedIndex].text
        let credit = document.querySelector('#credit').value 

        del.innerHTML = 'x'
        del.onclick = function(){
            table.removeChild(row)
        }

        col1.append(name)
        col2.append(grade) 
        col3.append(credit) 
        col4.append(del)
        row.append(col1)
        row.append(col2)
        row.append(col3)
        row.append(col4)
        table.append(row)

        allGPA += Number(gpa.value) * Number(credit)
        allCRD += Number(credit)
        semGPA[Number(sem.value)] += Number(gpa.value) * Number(credit)
        semCRD[Number(sem.value)] += Number(credit)

        var IDcheck = name.substr(0,3)
        if(IDcheck == "261" || IDcheck == "269"){
            mjGPA +=Number(gpa.value) * Number(credit)
            mjCRD += Number(credit)
        }
        
        return false
    }
    document.querySelector('#form2').onsubmit = function(){
        let calc = document.createElement('span')
        calc = document.getElementById("gpax")
        let type = calc.options[calc.selectedIndex].text
        const sem = document.querySelector('#semester').value
     
        
        if(calc.value == "1"){
            var cal = Number(allGPA)/Number(allCRD)
            cal = String(cal)
            var gpax = cal.substr(0,4)
            document.getElementById("calc").innerHTML = String(gpax)
        }else if(calc.value == "2"){
            var cal = Number(mjGPA)/Number(mjCRD)
            cal = String(cal)
            var gpax = cal.substr(0,4)
            document.getElementById("calc").innerHTML = String(gpax)
        }else{
            document.getElementById("calc").innerHTML = " "
        }
            return false
        }
        document.querySelector('#form3').onsubmit = function(){
            let sem = document.querySelector('#gpax-sem').value
            var cal = Number(semGPA[Number(sem)])/Number(semCRD[Number(sem)])
            cal = String(cal)
            var gpax = cal.substr(0,4)
            document.getElementById("calc").innerHTML = String(gpax)
            return false
        }
})