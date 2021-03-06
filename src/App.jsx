var contentNode = document.getElementById("contents");

class IssueFilter extends React.Component {
    render() {
        return <div>This is a placeholder for issueFileter</div>;
    }
}

class IssueTable extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };
        return (
            <table style={{ borderCollapse: "collapse" }}>
                <thead>
                    <tr>
                        <th style={borderedStyle}>Id</th>
                        <th style={borderedStyle}>Title</th>
                    </tr>
                </thead>

                <tbody>
                    <IssueRow
                        issue_id={1}
                        issue_title="Error in console when clicking add."
                    />
                    <IssueRow
                        issue_id={2}
                        issue_title="Missing bottom norder on panel."
                    />
                </tbody>
            </table>
        );
    }
}

class IssueRow extends React.Component {
    render() {
        const borderedStyle = { border: "1px solid silver", padding: 4 };

        return (
            <tr>
                <td style={borderedStyle}>{this.props.issue_id}</td>
                <td style={borderedStyle}>{this.props.issue_title}</td>
            </tr>
        );
    }
}

class IssueAdd extends React.Component {
    render() {
        return <div>This is a placeholder for IssueAdd</div>;
    }
}
class IssueList extends React.Component {
    render() {
        return (
            <div>
                <h1>Issue Tracker</h1>
                <IssueFilter></IssueFilter>
                <hr></hr>

                <IssueTable></IssueTable>

                <hr />

                <IssueAdd></IssueAdd>
            </div>
        );
    }
}

ReactDOM.render(<IssueList></IssueList>, contentNode);
