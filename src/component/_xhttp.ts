interface AjaxOption {
	headers?: Object,
	body?: any,
	method?: string
}

export async function GET(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "GET";

	return request(url, option);
}

export async function POST(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "POST";

	return request(url, option);
}

export async function PUT(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "PUT";

	return request(url, option);
}

export async function PATCH(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "PATCH";

	return request(url, option);
}

export async function DELETE(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "DELETE";

	return request(url, option);
}

export async function HEAD(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "HEAD";

	return request(url, option);
}

export async function OPTION(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	option.method = "OPTION";

	return request(url, option);
}

function request(url: string, option: AjaxOption): Promise<XMLHttpRequest> {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open(option.method, url);

		if(option.headers){
			for(var key in option.headers){
				xhr.setRequestHeader(key, option.headers[key])
			}
		}

		xhr.onload = function () {
			if (this.status >= 200 && this.status < 300) {
				resolve(xhr);
			} else {
				reject({
					status: this.status,
					statusText: xhr.statusText
				});
			}
		};

		xhr.onerror = function () {
			reject({
				status: this.status,
				statusText: xhr.statusText
			});
		};

		xhr.send(option.body);
	});
}