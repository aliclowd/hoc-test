import React from 'react';
import axios from 'axios';

export default function withSubmitQuery(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }

        componentDidMount() {
        }

        componentWillUnmount() {
        }

        submitQuery = (url, param, query) => {
            console.log(query);
            axios.get(`${url}?${param}=` + query).then(data => {
                if (data) {
                    this.setState({ data: data })
                }
            }).catch(err => {
                console.log(err);
            })
        }

        render() {
            return <WrappedComponent onSubmitQuery={this.submitQuery} data={this.state.data} {...this.props} />;
        }
    };
};