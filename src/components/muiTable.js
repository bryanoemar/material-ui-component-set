(() => ({
  name: 'MuiTable',
  icon: 'DataTable',
  type: 'CONTENT_COMPONENT',
  allowedTypes: [],
  orientation: 'HORIZONTAL',
  jsx: (
      (() => {
        const MaterialTable = window.ExperimentalTable;
        const { forwardRef } = React;

        const { AddBox, Check, Clear, 
                DeleteOutline, ChevronRight, Edit, 
                SaveAlt, FilterList, FirstPage,
                LastPage, ChevronLeft, Search, 
                ArrowDownward, Remove, ViewColumn } = window.MaterialUI.Icons;

        const [state, setState] = React.useState({
          columns: [
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            {
              title: 'Birth Place',
              field: 'birthCity',
              lookup: { 34: 'Suriname', 63: 'Nederland' },
            },
          ],
          data: [
            { name: 'Bryan', surname: 'Oemar', birthYear: 1989, birthCity: 34 },
            {
              name: 'Sebastian',
              surname: 'Snackers',
              birthYear: 1991,
              birthCity: 63,
            },
          ],
        });

        const tableIcons = {
          Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
          Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
          Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
          Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
          DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
          Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
          Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
          Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
          FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
          LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
          NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
          PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
          ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
          Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
          SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
          ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
          ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
        };

        const localization = {
          body: {
            editRow: {
              deleteText: "Weet u het zeker?"
            }
          }
        }
      
        return (
          <div>
            <MaterialTable
              icons={tableIcons}
              localization={localization}
              title="Editable Example"
              columns={state.columns}
              data={state.data}
              editable={{
                onRowAdd: (newData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.push(newData);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
                onRowUpdate: (newData, oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      if (oldData) {
                        setState((prevState) => {
                          const data = [...prevState.data];
                          data[data.indexOf(oldData)] = newData;
                          return { ...prevState, data };
                        });
                      }
                    }, 600);
                  }),
                onRowDelete: (oldData) =>
                  new Promise((resolve) => {
                    setTimeout(() => {
                      resolve();
                      setState((prevState) => {
                        const data = [...prevState.data];
                        data.splice(data.indexOf(oldData), 1);
                        return { ...prevState, data };
                      });
                    }, 600);
                  }),
              }}
            />
          </div>
        );
      })()
  ),
  styles: () => () => {
    return {
    };
  },
}))();
