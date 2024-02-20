from win32com import client

# Path to the Excel file
excel_file_path = r'C:\Users\Chaitanya\Downloads\excel.xlsx'

# Path to save PDF files
pdf_path = r'C:\Users\Chaitanya\Downloads\pdfs\\'


# Open Microsoft Excel
excel = client.Dispatch("Excel.Application")

try:
    # Read Excel File
    workbook = excel.Workbooks.Open(excel_file_path)

    # Get the number of sheets in the workbook
    num_sheets = workbook.Worksheets.Count

    # Save each sheet as a PDF file
    for i in range(1, num_sheets + 1):
        sheet = workbook.Worksheets(i)
        pdf_file_path = pdf_path + f"Sheet_{i}.pdf"
        sheet.ExportAsFixedFormat(0, pdf_file_path)

    print("PDF files created successfully!")

except Exception as e:
    print(f"An error occurred: {e}")

finally:
    # Close Excel
    workbook.Close(False)
    excel.Quit()