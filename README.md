
---

# BMI Calculator

## Overview

The BMI Calculator is a simple and user-friendly tool built using Lightning Web Components (LWC) to calculate Body Mass Index (BMI). This application allows users to input their weight and height to determine their BMI and understand their health status.

## Prerequisites

- Salesforce CLI v2
- A Salesforce Developer Org

## Installation

### Clone the Repository

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Vikram-8465/Bmi-Calculator.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd Bmi-Calculator
    ```

### Deploy to Salesforce

1. **Authorize your Salesforce org and provide it with an alias (e.g., myOrgAlias):**
    ```bash
    sf login org --alias myOrgAlias --set-default
    ```

2. **Deploy the project to your Salesforce org:**
    ```bash
    sf project deploy start --source-dir force-app
    ```
    
4. **Open the org to see the BMI Calculator:**
    ```bash
    sf org open
    ```

## Usage

1. **Access the BMI Calculator app** from the App Launcher in your Salesforce org.
2. **Input your weight and height:**
    - Enter your weight in kilograms or pounds.
    - Enter your height in meters or feet and inches.
3. **View your BMI:**
    - The calculator will display your BMI value along with a health status category (e.g., Underweight, Normal weight, Overweight, Obesity).

---
