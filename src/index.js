new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "4", "2"],
["theextendedname.4879", "5", "5", "14", "14"],
["Batercus.6257", "4", "2", "8", "5"],
["Bloop.2831", "5", "4", "14", "12"],
["virtual.3879", "0", "0", "3", "0"],
["Soushi.5132", "2", "0", "4", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "1", "1"],
["Tarmogobs.7186", "3", "2", "7", "3"],
["Oshamaya.6195", "2", "0", "4", "0"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["Tien.4913", "4", "0", "9", "1"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["Georgiou.4618", "3", "0", "4", "0"],
["sachaa.8706", "2", "0", "7", "2"],
["DaragangMagayon.1795", "2", "0", "3", "0"],
["Obisaurus.8960", "3", "3", "10", "9"],
["SayuriXY.2593", "1", "0", "2", "0"],
["Kodes.5784", "1", "1", "10", "9"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "3", "1", "9", "3"],
["Suricatta.1029", "2", "2", "4", "4"],
["JCthirteen.1985", "0", "0", "1", "0"],
["rawrking.1958", "0", "0", "3", "1"],
["Ganix.1957", "5", "5", "14", "14"],
["morsel.4670", "4", "4", "13", "13"],
["Chapchap.6107", "0", "0", "1", "1"],
["Ambroise Diggs.5692", "1", "1", "2", "2"],
["DaBMz.5724", "1", "1", "5", "5"],
["LiLMochaJoe.7456", "4", "3", "8", "6"],
["Cossack.3092", "1", "0", "1", "0"],
["Lhew.1904", "3", "3", "5", "5"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "4", "4"],
["Luetenant.3178", "3", "0", "4", "0"],
["Zugare.9032", "0", "0", "1", "1"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Xeerot.7418", "3", "0", "3", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "3", "3", "6", "4"],
["Arkanus.5304", "0", "0", "0", "0"],
["Meen.2467", "5", "4", "14", "12"],
["blindwaves.7952", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "5", "5", "14", "14"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "3", "2"],
["Inflikted.1936", "0", "0", "0", "0"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "2", "2", "3", "3"],
["Nexle.8320", "3", "3", "7", "3"],
["Calgari.8671", "1", "1", "1", "1"],
["Banchou.5628", "4", "4", "10", "9"],
["Biot.7201", "4", "4", "7", "4"],
["Quercus helvetica.6093", "2", "2", "6", "4"],
["Max Critts.4620", "3", "2", "6", "5"],
["Escaflow.5407", "0", "0", "0", "0"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Hikaro.1743", "2", "0", "5", "0"],
["kodo.4087", "3", "3", "5", "4"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "3", "3", "3", "3"],
["MONI.6195", "2", "0", "5", "0"],
["Mori.8729", "1", "0", "7", "0"],
["Swagasarus.6150", "0", "0", "3", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["Dirddle.8524", "5", "2", "10", "4"],
["Stay Alive.2917", "3", "3", "7", "6"],
["Titan.1784", "0", "0", "1", "0"],
["mrhnwt.9084", "2", "2", "8", "8"],
["Itzal.9743", "3", "0", "3", "0"],
["juniippurr.9521", "5", "5", "10", "10"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/23/2025 22:08:36"]],		
	
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


