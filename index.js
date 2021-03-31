(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('insert into dispositivos');
    await db.inserirdispositivos({categoria_estrangeira,cor,partNumber});
    
    console.log('SELECT * from dispositivos');
    const dispositivos = await db.selecionardispositivos();
    console.log (dispositivos);

    console.log('DELETE * from dispositivos');
    const result2 = await db.deletardispositivos(id);
    console.log (result2);
})();

(async () => {
    const db = require("./db");
    console.log('Começou2!');
    
    console.log('insert into categoria');
    await db.inserircategoria({nome});
    
    console.log('SELECT * from categoria');
    const categoria = await db.selecionarcategoria();
    console.log (categoria);

    console.log('DELETE * from categoria');
    const result3 = await db.deletarcategoria(id);
    console.log (result2);
})();