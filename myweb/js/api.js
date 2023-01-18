var api_key = "pctbeeot95j9tpo__ort77_1be7r37ro";

$(document).ready(function () {
	var btn_load = document.getElementById('btn_load')
	btn_load.addEventListener('click', function () {
		var courseNumber = document.getElementById('courseNumber');
		if (isNaN(courseNumber.value) || courseNumber.value < 1 || courseNumber.value > 22) {
			alert('1~21 사이의 숫자를 입력하세요');
			document.getElementById('demoJSON').innerHTML = "";
			courseNumber.focus();
		} else {

			var courseNumber = $('#courseNumber').val();

			var url = "https://open.jejudatahub.net/api/proxy/1Daaa177batDba8b8t711D17D18atDa7/" + api_key + "?courseNumber=" + courseNumber + "코스";

			$.ajax({
				url: url,
				type: "GET",
				cache: false,
				success: function (data, status) { 
					if (status == "success") parseJSON(data);
				}
			})
		}

		$("#btn_remove").click(function () {
			// TODO
			$("#demoJSON").empty();
		});
		// });

		function parseJSON(jsonObj) {
			const table = [];
			table.push("<tr><th>코스번호</th><th>코스이름</th><th>출발점</th><th>도착점</th></tr>");
			for (data of jsonObj.data) {
				table.push(`
					<tr>
						<td>${data.courseNumber}</td>
						<td>${data.courseName}</td>
						<td>${data.startPoint}</td>
						<td>${data.endPoint}</td>
					</tr>
					`);
			}
			$("#demoJSON").html(table.join('\n'));
		}

	});

})
