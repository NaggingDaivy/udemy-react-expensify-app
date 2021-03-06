import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';



class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null

    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused }));
    };

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.props.filters.text}
                    onChange={(e) => {
                        const textFilter = e.target.value;
                        this.props.dispatch(setTextFilter(textFilter));
                    }}
                />
                <select
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        const value = e.target.value;
                        switch (value) {
                            case 'date': {
                                this.props.dispatch(sortByDate());
                                break;
                            }

                            case 'amount': {
                                this.props.dispatch(sortByAmount());
                            }
                            default: break;
                        }
                    }
                    }
                >
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDateId="start"
                    endDateId="end"
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDatesChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    showClearDates={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                />
            </div>
        )
    }
}



const mapStateToProps = state => ({
    filters: state.filters,
});


export default connect(mapStateToProps)(ExpenseListFilters);
