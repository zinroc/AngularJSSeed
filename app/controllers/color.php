<?php




    public function getAll () {
        $this->printJSONSuccess('colors!');
    }

    /**
     * Print the given array in JSON with the correct content type.
     */
    private function printJSON ($arr) {
        $this->output->set_content_type("application/json");
        $this->output->set_output(json_encode($arr));
    }

    /**
     * Helper function to avoid code duplication
     */
    private function printJSONDatabaseError() {
        $this->printJSONError("DB error: " . pg_last_error());
    }

    /**
     * Helper function to avoid code duplication
     */
    private function printJSONError($msg) {
        $this->printJSON(array('status' => 'error', 'msg' => $msg));
    }

    /**
     * Helper function to avoid code duplication
     */
    private function printJSONSuccess($msg) {
        $this->printJSON(array('status' => 'success', 'msg' => $msg));
    }

    return $this->printJSONSuccess('colors!');


?>