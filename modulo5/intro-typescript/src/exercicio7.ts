function DNAparaRNA(dna: string): string {

    let rna: string = ""
    
    for (let i = 0; i < dna.length; i++) {
        switch(dna[i]) {
            case "A":
                rna += "U"
                break;
            case "T":
                rna += "A"
                break;
            case "C":
                rna += "G"
                break;
            case "G":
                rna += "C"
                break;
        }
   }

    return rna
}

console.log(DNAparaRNA("ATTGCTGCGCATTAACGACGCGTA"))