new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "1", "3", "2"],
["theextendedname.4879", "2", "2", "11", "11"],
["Batercus.6257", "1", "1", "6", "4"],
["Bloop.2831", "2", "2", "11", "9"],
["Soushi.5132", "1", "0", "4", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "0", "0"],
["Tarmogobs.7186", "1", "1", "5", "4"],
["Oshamaya.6195", "1", "0", "3", "0"],
["Jeans.5360", "1", "0", "1", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["Tien.4913", "2", "0", "8", "1"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["phaneo.3197", "0", "0", "0", "0"],
["Georgiou.4618", "1", "0", "5", "0"],
["sachaa.8706", "2", "0", "5", "1"],
["DaragangMagayon.1795", "1", "0", "4", "0"],
["Obisaurus.8960", "2", "0", "8", "6"],
["SayuriXY.2593", "0", "0", "2", "0"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "1", "1", "6", "3"],
["Suricatta.1029", "1", "1", "4", "4"],
["JCthirteen.1985", "0", "0", "0", "0"],
["rawrking.1958", "0", "0", "0", "0"],
["Ganix.1957", "1", "1", "10", "10"],
["morsel.4670", "2", "2", "10", "10"],
["Chapchap.6107", "0", "0", "0", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["DaBMz.5724", "1", "0", "2", "1"],
["LiLMochaJoe.7456", "1", "1", "6", "5"],
["Lhew.1904", "0", "0", "4", "4"],
["Kharashadora.9043", "1", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "4", "4"],
["Luetenant.3178", "1", "0", "5", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "1", "0", "1", "0"],
["Beer Meister.5938", "0", "0", "0", "0"],
["Xeerot.7418", "2", "0", "5", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "5", "4"],
["Arkanus.5304", "0", "0", "0", "0"],
["Meen.2467", "2", "2", "11", "9"],
["blindwaves.7952", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "2", "2", "11", "11"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "3", "2"],
["Inflikted.1936", "0", "0", "0", "0"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "0", "0", "3", "3"],
["Nexle.8320", "1", "1", "5", "4"],
["Calgari.8671", "0", "0", "1", "1"],
["Banchou.5628", "2", "2", "8", "8"],
["Biot.7201", "1", "0", "6", "4"],
["Quercus helvetica.6093", "0", "0", "3", "3"],
["Max Critts.4620", "0", "0", "6", "5"],
["Escaflow.5407", "1", "1", "1", "1"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Hikaro.1743", "0", "0", "2", "0"],
["kodo.4087", "1", "1", "4", "4"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "1", "1", "4", "4"],
["MONI.6195", "0", "0", "4", "0"],
["Mori.8729", "1", "0", "5", "0"],
["Swagasarus.6150", "1", "0", "3", "1"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "1", "0", "1", "0"],
["Dirddle.8524", "2", "1", "9", "4"],
["Stay Alive.2917", "1", "1", "4", "4"],
["Titan.1784", "0", "0", "0", "0"],
["mrhnwt.9084", "1", "1", "6", "6"],
["Itzal.9743", "1", "0", "4", "0"],
["juniippurr.9521", "1", "1", "6", "6"],
["XtremeOne.4729", "0", "0", "0", "0"],
["Classic GD.5872", "1", "0", "1", "0"],
["Gigglegasm.2174", "1", "1", "1", "1"],
		],
	sort: true,
	search: true,
	fixedHeader: true,
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'left'	 
    }
  }
}).render(document.getElementById("wrapper"));

new gridjs.Grid({columns: ["Last Run"],data: [["11/01/2025 11:05:33"]],		
	
  style: {
    table: {
      'border': '3px solid #ccc'
    },
    th: {
      'background-color': 'rgb(32,32,32)',
      'color': '#FFFFFF',
      'border-bottom': '3px solid #ccc',
      'text-align': 'center'
    },
   td: {
	   'background-color': 'rgb(88,88,88)',
      'color': '#FFFFFF',
      'text-align': 'center'	 
    }
  }
}).render(document.getElementById("datetime"));


