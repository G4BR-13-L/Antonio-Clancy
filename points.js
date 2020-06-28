



function calcular(){
	var score = document.querySelector('h2#score_points')
	var category_letter = document.querySelector('h2#category_letter')
	var information = {}
	information.wep = verify_nums(1)
	information.lif = verify_nums(2)
	information.losLife = verify_nums(3)
	information.collects = verify_nums(4)
	information.duration = verify_nums(5)
	information.difficulty = verify_nums(6)
	information.difficulty_n = information.difficulty.toString()	
	

	if((information.wep>0) && (information.wep<4)){
		switch(information.wep){
			case 1:
				information.wep = 1.2 
			break;
			case 2:
				information.wep = 1.5 
			break;
			case 3:
				information.wep = 2 
			break;
		}
		if((information.lif>=0)&&(information.lif<=100)){
			if(information.losLife>=0){
				window.alert('dados inseridos com sucesso')
			}else{
				window.alert('Digite um numero valido para a quantidade de vida que lhe foi tirada')
				information.losLife = null
			}
		}else{
			window.alert('Digite um numero valido para a quantidade de vida ')
			information.lif = null
		}
	}else{
		window.alert('Você deve escolher entre as armas 1, 2 e 3 ')
		information.wep = null

	}	
	var bonus
	switch(information.difficulty_n){
				case 'M': 
					bonus = 1
				break;
				case 'B': 
					bonus = 2
				break;
				case 'P': 
					bonus = 3
				break;
	}
	var final_score = ((information.lif/information.duration)*((information.wep*information.collects)**bonus))-information.losLife
	var category
	if(final_score>=10000){
		category = "A"
	}else if(final_score>=5000){
		category = "B"
	}else if(final_score<5000){
		category = "C"
	}
	score.innerText = final_score
	category_letter.innerText = category
}
function verify_nums(item){
	var data ={}
	data.wep = Number(window.document.querySelector('input#weapon').value)
	data.lif = Number(window.document.querySelector('input#restant_life').value)
	data.losLife = Number(window.document.querySelector('input#lost_life').value)
	data.collects = Number(window.document.querySelector('input#collects').value)
	data.duration = Number(window.document.querySelector('input#duration').value)
	data.difficulty = "x"	
		if((Number.isInteger(data.wep) != true)||(Number.isInteger(data.lif) != true)||(Number.isInteger(data.losLife) != true)||(Number.isInteger(data.collects) != true)||(Number.isInteger(data.duration) != true)){
			window.alert('Digite um numero valido para'+data[1])
		}else{
			var e = document.querySelector('select#difficulty');
			data.difficulty = e.options[e.selectedIndex].value;
		}
		switch(item){
			case 1:
				return(data.wep)
			break;
			case 2:
				return(data.lif)
			break;
			case 3:
				return(data.losLife)
			break;
			case 4:
				return(data.collects)
			break;
			case 5:
				return(data.duration)
			break;
			case 6:
				return(data.difficulty)
			break;
		}		
}

