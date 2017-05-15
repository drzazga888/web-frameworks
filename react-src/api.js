import $ from 'jquery';

export function fetchPeople(search, orderBy, context) {
	return $.ajax({
		method: 'GET',
		url: '/web-frameworks/rest/person/',
		data: {
			search: search,
			orderby: orderBy
		},
		context: context
	});
}

export function fetchPerson(id, context) {
	return $.ajax({
        method: 'GET',
        url: `/web-frameworks/rest/person/${id}`,
        context: context
	});
}

export function editPerson(data, context) {
	return $.ajax({
        method: 'PUT',
        url: '/web-frameworks/rest/person/',
        contentType: 'application/json',
        data: JSON.stringify(data),
        context: context
    });
}

export function createPerson(data, context) {
	return $.ajax({
		method: 'POST',
		url: '/web-frameworks/rest/person/',
		contentType: 'application/json',
		data: JSON.stringify(data),
		context: context
	})
}

export function deletePerson(id, context) {
	return $.ajax({
        method: 'DELETE',
        url: `/web-frameworks/rest/person/${id}`,
        context: context
	});
}