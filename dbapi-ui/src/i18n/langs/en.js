import enLocale from 'element-ui/lib/locale/lang/en' // 引入element语言包
const en = {
    m: {
        login: 'Login',
        cancel: 'Cancel',
        export: 'Export',
        datasource: 'Datasource',
        authority: 'Authority',
        settings: 'Settings',
        createDS: 'New Datasource',
        exportDS: 'Export Datasources',
        importDS: 'Import Datasources',
        database: 'Database',
        name: 'Name',
        note: 'Note',
        jdbc_driver_class: 'JDBC Driver Class',
        username: 'Username',
        password: 'Password',
        edit_password: 'Edit',
        sql_query_all_table_name: 'SQL that get table names',
        test_connection: 'Test Connection',
        save: 'Save',
        create_ds: 'New Datasource',
        update_ds: 'Modify Datasource',
        export_ds: 'Export Datasource',
        import_ds: 'Import Datasource',
        ds_detail: 'Datasource Detail',
        update_time: 'Update Time',
        operation: 'Operation',
        back: 'Back',
        ds_sql_tip: 'When you create or edit API, you should click to choose datasource, then this sql will be executed to query names of all tables',
        ds_driver_tip: 'If you choose other db,please make sure the corresponding jdbc driver jar exists.If not, you need to copy the jar file to lib/ directory.',

        create_api: 'New API',
        update_api: 'Modify API',
        api_detail: 'API Detail',
        create_group: 'New Group',
        api_group_manage: 'API Group Manage',
        export_api_doc: 'Export API Doc',
        export_api: 'Export API',
        import_api: 'Import API',
        export_api_groups: 'Export API Groups',
        import_api_groups: 'Import API Groups',
        api_group: 'API Group',
        search: 'Search',
        input_keyword: 'Please input keyword',
        path: 'Path',
        parameters: 'Parameters',
        access: 'Access',
        private: 'Private',
        public: 'Public',
        data_convert: 'Convert',
        cache: 'Cache',
        basic_info: 'Basic Info',
        access_tip: 'Public API can always be accessed directly. Private API can only be accessed with token. You can learn more from the Authority menu',
        plugin_class: 'Plugin Class',
        plugin_parameter: 'Plugin Parameter',
        what_is_plugin: 'What is plugin',
        what_is_plugin_param: 'What is plugin parameter',
        request_test: 'API Request Test',
        url: 'URL',
        header: 'Request Header',
        result: 'Result',
        send: 'Send Request',
        json_format: 'JSON Format',
        view_in_table: 'View In Table',
        raw_data: 'Raw Data',

        create_token: 'New Token',
        create_time: 'Create Time',
        forever: 'Forever',
        expire: 'Expiration Time',
        expired: 'Expired',
        token_tip: "Private API can only be accessed with token in http request header('Authorization' field).\nPython code example is as follows:\n",
        generate: 'Generate Automatically',
        expire_tip: 'If set null, means forever',
        grant: 'Grant access rights to APIs of selected groups',

        firewall: 'IP Firewall',
        on: 'ON',
        off: 'OFF',
        mode: 'Mode',
        black_list: 'Black List',
        white_list: 'White List',
        ip_list: 'IP List',
        status: 'IP Firewall Status',
        firewall_settings: 'IP Firewall Settings',
        black_tip: 'All IP can access except those in black list',
        white_tip: 'Only IP in white list can access',
        ip_list_tip: 'Input one IP in one line, multi ip must in multi lines',

        change_pass: 'Change Password',

        monitor: 'Monitor',
        summary: 'Summary',
        detail: 'Detail',
        query: 'Query',
        startDate:'Start Date',
        endDate:'End Date',
        to:'TO',
        apiNum:'Total quantity of API',
        trend:'API Access Trend',
        topNApi:'Top 10 API',
        topNApp:'Top 10 APP',
        topNDuration:'Top 10 API ',
        lastWeek: 'Last Week',
        lastMonth: 'Last Month',
        last3Month: 'Last 3 Months'


    },
    ...enLocale
}

export default en
