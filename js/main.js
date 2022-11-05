requirejs.config({
    appDir: ".",
    baseUrl: "js",
    paths: {
        'jquery': 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min',
        'bootstrap': 'https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.2.2/js/bootstrap.bundle.min',
        'datatables': 'https://cdn.datatables.net/v/bs5/dt-1.12.1/fh-3.2.4/datatables.min',
        'datatables-input': 'https://cdn.datatables.net/plug-ins/1.12.1/pagination/input',
    },
    shim: {
        'bootstrap': ['jquery'],
        'datatables': ['jquery'],
        'datatables-input': ['datatables'],
    },
    map: {
        '*': {
            'datatables.net': 'datatables',
            'datatables.net-input': 'datatables-input',
        }
    }
});

require(['jquery', 'bootstrap', 'datatables', 'datatables-input'], function ($, _, DataTable) {
    console.log("Loaded.");
    $(function () {
        $('#main_table').DataTable({
            ajax: {
                url: "data/freq_list_results.json",
            },
            fixedHeader: true,
            deferRender: true,
            language: {
                url: 'https://cdn.datatables.net/plug-ins/1.12.1/i18n/vi.json'
            },
            columns: [
                { data: 'rank' },
                { data: 'word' },
                { data: 'count' },
                { data: 'freq' },
                { data: 'rel_freq' },
            ],
            columnDefs: [
                {
                    target: 1,
                    "createdCell": function (td, cellData, rowData, row, col) {
                        if (rowData.hasOwnProperty('url')) {
                            $(td).html(`<a href="${rowData.url}" target="_blank">${cellData}</a>`)
                        }
                    }
                },
                {
                    target: 3,
                    render: DataTable.render.number(null, null, 6),
                },
                {
                    target: 4,
                    render: DataTable.render.number(null, null, 6),
                },
            ],
            pagingType: "input",
        });
    });
});