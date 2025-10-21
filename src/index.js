new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "1", "4", "2"],
["theextendedname.4879", "5", "5", "14", "14"],
["Batercus.6257", "2", "1", "7", "4"],
["Bloop.2831", "5", "5", "14", "13"],
["virtual.3879", "0", "0", "4", "0"],
["Soushi.5132", "2", "0", "5", "0"],
["Berticus.8167", "0", "0", "0", "0"],
["Talcos.9723", "0", "0", "1", "1"],
["Tarmogobs.7186", "2", "1", "7", "2"],
["Oshamaya.6195", "1", "0", "3", "0"],
["Jeans.5360", "0", "0", "0", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["Tien.4913", "2", "0", "8", "1"],
["MysticVetSock.4078", "0", "0", "0", "0"],
["Georgiou.4618", "4", "0", "4", "0"],
["sachaa.8706", "3", "1", "7", "2"],
["DaragangMagayon.1795", "2", "0", "4", "0"],
["Obisaurus.8960", "4", "4", "11", "9"],
["SayuriXY.2593", "1", "0", "2", "0"],
["TheGamingNP.3068", "2", "0", "2", "0"],
["Kodes.5784", "2", "2", "11", "10"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "2", "0", "9", "2"],
["Suricatta.1029", "1", "1", "3", "3"],
["JCthirteen.1985", "0", "0", "1", "0"],
["rawrking.1958", "0", "0", "3", "1"],
["Ganix.1957", "4", "4", "13", "13"],
["morsel.4670", "5", "5", "14", "14"],
["Chapchap.6107", "0", "0", "1", "1"],
["Ambroise Diggs.5692", "0", "0", "1", "1"],
["DaBMz.5724", "0", "0", "4", "4"],
["LiLMochaJoe.7456", "2", "1", "7", "5"],
["Cossack.3092", "1", "0", "1", "0"],
["Lhew.1904", "2", "2", "5", "5"],
["Kharashadora.9043", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "0", "0", "2", "2"],
["Luetenant.3178", "3", "0", "5", "0"],
["Zugare.9032", "0", "0", "1", "1"],
["Maleficpanda.8350", "0", "0", "0", "0"],
["Beer Meister.5938", "0", "0", "1", "0"],
["Xeerot.7418", "1", "0", "1", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "1", "1", "4", "2"],
["Arkanus.5304", "0", "0", "0", "0"],
["Meen.2467", "5", "4", "14", "11"],
["blindwaves.7952", "0", "0", "0", "0"],
["ItIsAllAboutCake.6125", "5", "5", "14", "14"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "1", "4", "2"],
["Inflikted.1936", "0", "0", "0", "0"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "1", "0"],
["eirka.1892", "1", "1", "2", "2"],
["Nexle.8320", "3", "3", "8", "3"],
["Calgari.8671", "0", "0", "1", "1"],
["Banchou.5628", "3", "3", "10", "8"],
["Biot.7201", "2", "2", "5", "2"],
["Quercus helvetica.6093", "3", "3", "6", "4"],
["Max Critts.4620", "3", "2", "6", "5"],
["Escaflow.5407", "0", "0", "0", "0"],
["Shrimpsanity.2107", "0", "0", "0", "0"],
["Hikaro.1743", "1", "0", "4", "0"],
["kodo.4087", "1", "1", "4", "3"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "1", "1", "1", "1"],
["MONI.6195", "3", "0", "5", "0"],
["Mori.8729", "2", "0", "7", "0"],
["Swagasarus.6150", "0", "0", "4", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["Dirddle.8524", "3", "2", "9", "4"],
["Stay Alive.2917", "1", "1", "6", "4"],
["Titan.1784", "0", "0", "2", "0"],
["mrhnwt.9084", "3", "3", "9", "9"],
["Itzal.9743", "3", "0", "3", "0"],
["juniippurr.9521", "4", "4", "10", "10"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["10/21/2025 10:03:54"]],		
	
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


