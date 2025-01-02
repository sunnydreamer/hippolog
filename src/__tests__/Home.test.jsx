/**
* @vitest-environment jsdom
*/

import React from 'react';
import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import Home from "../components/Home"

describe('Home', () => {
    test("should render the component", () => {
        render(<Home />);
        expect(screen.getByText("Home")).toBeInTheDocument();
    })
});
