import React from 'react';
import DataTable from 'react-redux-datatable';
import 'react-redux-datatable/dist/styles.css';

const apiLocation = 'http://localhost:4000/api/article/table';

const tableSettings = {
  tableID: 'ArticlesTable',
  wrapperType: 'section',
  displayTitle: 'Articles Table',
  keyField: 'id',
  defaultSort: ['id', 'desc'],
  minWidth: 880,
  useLocalStorage: true,
  tableColumns: [
    {
      title: 'Id',
      key: 'id',
    },
    {
      title: 'Title',
      key: 'title',
    },
  ],
};

const ArticleTable = () => (
    <DataTable
      tableSettings={tableSettings}
      apiLocation={apiLocation}
    />
);

export default ArticleTable;
