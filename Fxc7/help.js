// menu fitur bot
const help = (prefix, pushname2, limitt, jam, tanggal) => { 
	return `
	

╭──────「 *MEMBRO* 」
┴
┣⊱  \`\`\`NOME:\`\`\` *${pushname2}*
┣⊱  \`\`\`VERIFICADO:\`\`\` ✅
┣⊱  \`\`\`LIMITE:\`\`\` *${limitt} Por Dia*
┣⊱  \`\`\`JAM:\`\`\` *${jam}*
┣⊱  \`\`\`HORA:\`\`\` *${tanggal}*
┬
╰────────────────────────


╭──────「 *MENU* 」
┴
│➻ *${prefix}report msg pro admin*
│➻ *${prefix}info*
│➻ *${prefix}owner*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}totaluser*
│➻ *${prefix}grouplist*
│➻ *${prefix}blocklist*
│➻ *${prefix}banlist*
│➻ *${prefix}premiumlist*
│➻ *${prefix}bahasa*
┬
╰────────────────────────


╭──────「 *Xavier-Bot* 」
┴
│➻ *${prefix}nulis*
│➻ *${prefix}tahta*
│➻ *${prefix}tts*
│➻ *${prefix}ttp*
│➻ *${prefix}sticker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
┬
╰──────────────────────────


╭───────「 *GRUPO_MENU* 」
┴
│➻ *${prefix}welcome On/Off*
│➻ *${prefix}grup open/close*
│➻ *${prefix}antilink on/off*
│➻ *${prefix}ownergrup*
│➻ *${prefix}cantada*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add 628xxxxxxxxxx*
│➻ *${prefix}kick @mentioned*
│➻ *${prefix}kicktime @mentioned*
│➻ *${prefix}promote @mentioned*
│➻ *${prefix}demote @mentioned*
│➻ *${prefix}setname*
│➻ *${prefix}setdesc*
│➻ *${prefix}linkgrup*
│➻ *${prefix}tagme*
│➻ *${prefix}hidetag*
│➻ *${prefix}mentionall*
│➻ *${prefix}fitnah*
│➻ *${prefix}listadmin*
│➻ *${prefix}simih On/Off*
┬
╰────────────────────────


╭──────「 *MENU_APPS* 」
┴
│➻ *${prefix}moddroid lightroom*
│➻ *${prefix}happymod lightroom*
│➻ *${prefix}playstore WhatsApp*
┬
╰────────────────────────


╭─────────「 *OWNER ONLY* 」
┴
│➻ *${prefix}addprem mentioned*
│➻ *${prefix}removeprem mention*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setreply*
│➻ *${prefix}setprefix*
│➻ *${prefix}setnamebot*
│➻ *${prefix}setppbot*
│➻ *${prefix}bc*
│➻ *${prefix}bcgc*
│➻ *${prefix}ban*
│➻ *${prefix}unban*
│➻ *${prefix}block*
│➻ *${prefix}unblock*
│➻ *${prefix}clearall*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}getses*
│➻ *${prefix}leave*
┬
╰────────────────────────


╭────────「 *MENU_PREMIUM* 」
┴
│➻ *${prefix}playmp3*
│➻ *${prefix}fb link video*
│➻ *${prefix}snack link snack video*
│➻ *${prefix}ytmp3 link*
│➻ *${prefix}ytmp4 link*
│➻ *${prefix}play*
│➻ *${prefix}smule*
┬
╰────────────────────────

`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

}


// Limit
const limitend = (pushname2) => {
        return`*Desculpe ${pushname2} Seu limite acabou*\n*o limite é redefinido a cada 12:00*`
}

const limitcount = (limitCounts) => {
        return`
${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount