function reset():void {
  document.querySelector("form")?.reset()
}


function borrar():any {
  let pantallaInput: {[k: string]: any} = 
      (document.getElementById("pantalla") as HTMLInputElement);    

  (document.getElementById('pantalla') as HTMLInputElement).value = pantallaInput.slice(
    0, pantallaInput.length - 1
  );
}
