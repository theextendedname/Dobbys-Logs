new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "1", "0", "5", "3"],
["theextendedname.4879", "2", "2", "14", "14"],
["Batercus.6257", "1", "1", "9", "5"],
["Bloop.2831", "2", "2", "13", "12"],
["virtual.3879", "0", "0", "4", "0"],
["Soushi.5132", "0", "0", "4", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "2", "2"],
["Tarmogobs.7186", "1", "0", "8", "3"],
["Tien.4913", "1", "0", "7", "1"],
["sachaa.8706", "1", "1", "6", "2"],
["DaragangMagayon.1795", "0", "0", "2", "0"],
["SayuriXY.2593", "0", "0", "2", "0"],
["Kodes.5784", "1", "1", "11", "10"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "0", "0", "7", "2"],
["Suricatta.1029", "1", "1", "4", "4"],
["JCthirteen.1985", "0", "0", "2", "0"],
["Ganix.1957", "2", "2", "14", "13"],
["morsel.4670", "2", "2", "14", "14"],
["DaBMz.5724", "0", "0", "5", "5"],
["LiLMochaJoe.7456", "1", "0", "7", "5"],
["Lhew.1904", "1", "1", "5", "5"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "0", "0", "4", "4"],
["Luetenant.3178", "0", "0", "3", "0"],
["Zugare.9032", "0", "0", "1", "1"],
["Maleficpanda.8350", "0", "0", "1", "1"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "4", "2"],
["Arkanus.5304", "0", "0", "0", "0"],
["Meen.2467", "2", "1", "14", "10"],
["ItIsAllAboutCake.6125", "2", "2", "14", "14"],
["gferreira.1862", "0", "0", "3", "1"],
["Ryulightorb.8407", "0", "0", "1", "0"],
["eirka.1892", "1", "1", "3", "2"],
["Nexle.8320", "0", "0", "6", "1"],
["Calgari.8671", "0", "0", "2", "1"],
["Banchou.5628", "1", "1", "11", "9"],
["Biot.7201", "1", "1", "4", "1"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Hikaro.1743", "0", "0", "5", "0"],
["TechnoTK.6498", "0", "0", "1", "0"],
["Mori.8729", "1", "0", "8", "0"],
["Swagasarus.6150", "0", "0", "4", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["Dirddle.8524", "1", "0", "8", "2"],
["Stay Alive.2917", "1", "1", "9", "7"],
["mrhnwt.9084", "1", "1", "9", "9"],
["juniippurr.9521", "1", "1", "10", "10"],
["rawrking.1958", "0", "0", "5", "1"],
["MONI.6195", "1", "0", "4", "0"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["Chapchap.6107", "0", "0", "2", "2"],
["Quercus helvetica.6093", "1", "1", "5", "2"],
["Titan.1784", "0", "0", "3", "0"],
["Crixfal.7452", "0", "0", "1", "0"],
["Oshamaya.6195", "1", "0", "5", "0"],
["Escaflow.5407", "0", "0", "0", "0"],
["Obisaurus.8960", "1", "1", "9", "6"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["kodo.4087", "0", "0", "5", "2"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["RevenantAlex.3749", "0", "0", "0", "0"],
["Anaxa.8423", "0", "0", "0", "0"],
["Max Critts.4620", "1", "0", "4", "3"],
["Georgiou.4618", "1", "0", "1", "0"],
["Itzal.9743", "0", "0", "0", "0"],
["TheGamingNP.3068", "1", "0", "1", "0"],
["Cossack.3092", "0", "0", "0", "0"],
["Mogarc.2173", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/16/2025 22:07:40"]],		
	
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


