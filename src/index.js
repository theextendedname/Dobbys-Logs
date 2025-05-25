new gridjs.Grid({
columns: ["Account Name", "7-Day Attend", "7D-Signed-Up",  "30-Day Attend",  "30D-Signed-Up"], 
data: [["Reina.1729", "2", "2", "7", "7"],
["theextendedname.4879", "3", "3", "10", "10"],
["Batercus.6257", "2", "2", "8", "5"],
["Bloop.2831", "3", "2", "9", "7"],
["Red.6531", "0", "0", "0", "0"],
["Suricatta.1029", "1", "1", "4", "4"],
["morsel.4670", "1", "1", "3", "3"],
["Kharashadora.9043", "0", "0", "0", "0"],
["Fuzz.5678", "0", "0", "0", "0"],
["KrimsonWolf.6781", "2", "2", "4", "4"],
["Beer Meister.5938", "0", "0", "2", "2"],
["cmdrpengu.3012", "0", "0", "2", "2"],
["ItIsAllAboutCake.6125", "2", "2", "7", "4"],
["Calgari.8671", "2", "2", "4", "4"],
["Biot.7201", "1", "1", "7", "5"],
["Ity.3504", "1", "0", "4", "0"],
["Hikaro.1743", "2", "1", "4", "2"],
["TechnoTK.6498", "1", "1", "5", "3"],
["Lompy.4613", "0", "0", "1", "1"],
["Ganix.1957", "2", "2", "5", "5"],
["Berticus.8167", "0", "0", "4", "2"],
["Grootella.1270", "2", "2", "8", "8"],
["Swagasarus.6150", "3", "0", "6", "2"],
["Dirddle.8524", "3", "2", "9", "7"],
["sadmantha.6841", "2", "2", "6", "5"],
["Lhew.1904", "0", "0", "0", "0"],
["Mori.8729", "0", "0", "2", "1"],
["JCthirteen.1985", "0", "0", "0", "0"],
["juniippurr.9521", "2", "2", "6", "6"],
["Gambit.8512", "2", "2", "6", "5"],
["Kuro Hato.9602", "0", "0", "0", "0"],
["Elani.1394", "0", "0", "3", "1"],
["DeepToot.4127", "0", "0", "6", "5"],
["Ruppi.4320", "0", "0", "0", "0"],
["jtheoof.9205", "0", "0", "0", "0"],
["MarcB.1853", "0", "0", "5", "5"],
["Nexle.8320", "1", "1", "3", "3"],
["Delacroix NA.4358", "1", "0", "4", "1"],
["Soushi.5132", "1", "0", "2", "0"],
["sachaa.8706", "0", "0", "0", "0"],
["Zugare.9032", "0", "0", "1", "1"],
["DaragangMagayon.1795", "1", "0", "2", "0"],
["qmunster.7951", "0", "0", "0", "0"],
["NicKPicks.9208", "0", "0", "0", "0"],
["takamina.9784", "0", "0", "0", "0"],
["ToraKalani.7985", "0", "0", "0", "0"],
["Sglobe.4827", "2", "2", "7", "7"],
["Rage.3169", "0", "0", "1", "1"],
["Pax.7358", "1", "1", "1", "1"],
["DanDizh.8416", "0", "0", "0", "0"],
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

new gridjs.Grid({columns: ["Last Run"],data: [["05/25/2025 10:08:14"]],		
	
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


