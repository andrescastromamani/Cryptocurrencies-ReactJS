import React, { Fragment, useState } from 'react'

export const useCurrency = () => {
    const [currency, setCurrency] = useState('USD')
    const select = (e) => {
        <Fragment>
            <label>Currency</label>
            <select>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="GBP">GBP</option>
                <option value="JPY">JPY</option>
                <option value="CNY">CNY</option>
                <option value="AUD">AUD</option>
            </select>
        </Fragment>
    }
    return [currency, select, setCurrency]
}
