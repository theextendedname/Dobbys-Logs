new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "5", "4", "8", "6"],
["theextendedname.4879", "5", "5", "13", "13"],
["Batercus.6257", "4", "2", "9", "5"],
["Bloop.2831", "5", "4", "13", "11"],
["Soushi.5132", "3", "0", "6", "0"],
["Talcos.9723", "0", "0", "0", "0"],
["Tarmogobs.7186", "3", "2", "7", "5"],
["Oshamaya.6195", "3", "0", "6", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["phaneo.3197", "1", "0", "1", "0"],
["Georgiou.4618", "3", "1", "8", "1"],
["sachaa.8706", "4", "1", "9", "2"],
["DaragangMagayon.1795", "2", "0", "5", "0"],
["Obisaurus.8960", "4", "3", "10", "7"],
["SayuriXY.2593", "1", "0", "2", "0"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "4", "1", "8", "3"],
["Suricatta.1029", "1", "1", "4", "4"],
["JCthirteen.1985", "0", "0", "0", "0"],
["rawrking.1958", "0", "0", "0", "0"],
["Ganix.1957", "4", "4", "11", "11"],
["morsel.4670", "5", "5", "12", "12"],
["Chapchap.6107", "2", "2", "2", "2"],
["DaBMz.5724", "2", "2", "4", "3"],
["LiLMochaJoe.7456", "4", "3", "9", "7"],
["Lhew.1904", "2", "2", "5", "5"],
["Kharashadora.9043", "0", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "4", "4"],
["Luetenant.3178", "1", "0", "5", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "0", "0", "1", "0"],
["Xeerot.7418", "5", "0", "10", "0"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "6", "6"],
["Meen.2467", "4", "4", "12", "11"],
["blindwaves.7952", "1", "1", "1", "1"],
["ItIsAllAboutCake.6125", "5", "4", "13", "12"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "0", "3", "2"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "3", "1", "5", "3"],
["Nexle.8320", "4", "2", "8", "6"],
["Calgari.8671", "1", "1", "2", "2"],
["Banchou.5628", "5", "2", "11", "8"],
["Biot.7201", "3", "0", "8", "4"],
["Quercus helvetica.6093", "2", "1", "5", "4"],
["Max Critts.4620", "3", "2", "6", "4"],
["Escaflow.5407", "1", "0", "2", "1"],
["Shrimpsanity.2107", "1", "0", "1", "0"],
["Hikaro.1743", "2", "0", "4", "0"],
["kodo.4087", "3", "2", "7", "6"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "3", "3", "7", "7"],
["MONI.6195", "0", "0", "3", "0"],
["Mori.8729", "3", "0", "6", "0"],
["Swagasarus.6150", "3", "1", "4", "1"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "1", "0", "2", "0"],
["Dirddle.8524", "5", "3", "12", "6"],
["Stay Alive.2917", "3", "3", "7", "7"],
["mrhnwt.9084", "1", "1", "5", "5"],
["Itzal.9743", "4", "0", "8", "0"],
["juniippurr.9521", "4", "4", "10", "10"],
["XtremeOne.4729", "0", "0", "0", "0"],
["Classic GD.5872", "1", "0", "2", "0"],
["Gigglegasm.2174", "2", "1", "3", "2"],
["booogsss.7048", "4", "0", "4", "0"],
["Ambroise Diggs.5692", "2", "2", "3", "3"],
["zStadust.9640", "0", "0", "0", "0"],
["Mandaragit.7069", "0", "0", "0", "0"],
["IllusionProtocol.7519", "0", "0", "0", "0"],
["IIRyanII.8135", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["11/09/2025 09:49:19"]],		
	
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


