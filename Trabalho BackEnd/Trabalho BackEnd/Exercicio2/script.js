const dbConfig = { porta: 5432, user: "admin" };;

for (const chave in dbConfig) {
    
    const valorReal = dbConfig[chave];
    console.log(`${chave} -> ${valorReal}`);
}