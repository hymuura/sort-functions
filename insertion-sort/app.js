function insertion_sort(collection){
	for(let x=1; x<collection.length; x++){
		let i=x-1;
		while(i>=0 && collection[i]>collection[i+1]){
			let aux = collection[i+1];
			collection[i+1]=collection[i];
			collection[i]=aux;
			i--;
		}
	}
}