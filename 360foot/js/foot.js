$.ajax({
	url:"../js/footinfo.js",
	dataType:"json",
	async:true,
	success:function(data){
		for (var i=0;i<data.length;i++) {
			$(".leftcon").append("<dl></dl>");
			$(".leftcon").children().eq(i).append("<dt>"+data[i].title+"</dt>");
			for (var j=0;j<data[i].con.length;j++) {
				$(".leftcon").children().eq(i).append("<dd><a href=javascript:;>"+data[i].con[j]+"</a></dd>")
			}
		}
	}
})
