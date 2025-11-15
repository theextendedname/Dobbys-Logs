new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "5", "4", "11", "9"],
["theextendedname.4879", "5", "5", "15", "15"],
["Batercus.6257", "5", "1", "13", "6"],
["Bloop.2831", "5", "5", "15", "13"],
["Soushi.5132", "2", "0", "6", "0"],
["Talcos.9723", "0", "0", "0", "0"],
["Tarmogobs.7186", "1", "1", "8", "6"],
["Oshamaya.6195", "0", "0", "6", "0"],
["KillAll.2076", "0", "0", "0", "0"],
["phaneo.3197", "3", "0", "3", "0"],
["Georgiou.4618", "2", "0", "8", "1"],
["sachaa.8706", "3", "0", "10", "1"],
["DaragangMagayon.1795", "2", "0", "5", "0"],
["Obisaurus.8960", "4", "3", "11", "7"],
["SayuriXY.2593", "1", "0", "3", "0"],
["Crixfal.7452", "0", "0", "0", "0"],
["ArcShadow.1629", "0", "0", "0", "0"],
["bitshift.5491", "1", "0", "8", "3"],
["Suricatta.1029", "1", "1", "5", "5"],
["JCthirteen.1985", "0", "0", "0", "0"],
["rawrking.1958", "0", "0", "0", "0"],
["Ganix.1957", "5", "5", "14", "14"],
["morsel.4670", "5", "5", "14", "14"],
["Chapchap.6107", "1", "0", "3", "2"],
["DaBMz.5724", "3", "3", "7", "6"],
["LiLMochaJoe.7456", "5", "3", "13", "10"],
["Lhew.1904", "1", "1", "6", "6"],
["Kharashadora.9043", "0", "0", "1", "0"],
["MarcB.1853", "0", "0", "0", "0"],
["KrimsonWolf.6781", "1", "1", "5", "5"],
["Luetenant.3178", "0", "0", "5", "0"],
["Zugare.9032", "0", "0", "0", "0"],
["Maleficpanda.8350", "0", "0", "1", "0"],
["Xeerot.7418", "4", "2", "12", "2"],
["Spades.2603", "0", "0", "0", "0"],
["Grootella.1270", "2", "2", "8", "8"],
["Meen.2467", "5", "3", "15", "12"],
["blindwaves.7952", "4", "3", "4", "3"],
["ItIsAllAboutCake.6125", "5", "4", "15", "13"],
["Anaxa.8423", "0", "0", "0", "0"],
["gferreira.1862", "1", "0", "3", "2"],
["Mogarc.2173", "0", "0", "0", "0"],
["Ryulightorb.8407", "0", "0", "0", "0"],
["eirka.1892", "1", "1", "6", "4"],
["Nexle.8320", "3", "0", "9", "6"],
["Calgari.8671", "0", "0", "2", "2"],
["Banchou.5628", "5", "3", "14", "11"],
["Biot.7201", "3", "0", "11", "4"],
["Quercus helvetica.6093", "1", "1", "4", "3"],
["Max Critts.4620", "4", "3", "9", "6"],
["Escaflow.5407", "0", "0", "2", "1"],
["Shrimpsanity.2107", "0", "0", "1", "0"],
["Hikaro.1743", "3", "0", "7", "0"],
["kodo.4087", "3", "3", "10", "9"],
["TechnoTK.6498", "0", "0", "0", "0"],
["RevenantAlex.3749", "3", "3", "10", "10"],
["MONI.6195", "0", "0", "2", "0"],
["Mori.8729", "2", "0", "6", "0"],
["Swagasarus.6150", "3", "1", "6", "2"],
["Icy Violin.9213", "0", "0", "0", "0"],
["takamina.9784", "2", "0", "3", "0"],
["Dirddle.8524", "4", "3", "14", "7"],
["Stay Alive.2917", "3", "2", "10", "9"],
["mrhnwt.9084", "0", "0", "4", "4"],
["Itzal.9743", "2", "0", "8", "0"],
["juniippurr.9521", "5", "4", "13", "12"],
["XtremeOne.4729", "1", "0", "1", "0"],
["Classic GD.5872", "0", "0", "2", "0"],
["Gigglegasm.2174", "2", "1", "5", "3"],
["booogsss.7048", "3", "0", "5", "0"],
["Ambroise Diggs.5692", "1", "1", "4", "4"],
["zStadust.9640", "0", "0", "0", "0"],
["Mandaragit.7069", "0", "0", "0", "0"],
["IllusionProtocol.7519", "0", "0", "0", "0"],
["IIRyanII.8135", "3", "1", "3", "1"],
["LeeroyLam.3274", "1", "0", "1", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["11/15/2025 09:48:08"]],		
	
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


